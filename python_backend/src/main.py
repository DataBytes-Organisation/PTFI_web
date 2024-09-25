from fastapi import FastAPI, File, UploadFile
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from typing import List
import time
import numpy as np
import pandas as pd
import csv
import io
from pydantic import BaseModel
import hashlib

from faker import Faker

from datetime import datetime, timedelta
import random
import uuid

import pickle
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import flwr as fl
import multiprocessing as mp
import os

#from Pyfhel import Pyfhel
#FOR TOKTAM ALTERNATE HE SOLUTION
from sympy import Symbol, expand
#import tenseal as ts
#AGAIN, PROBLEM WITH THE DEPENDENCY:
#https://pypi.org/project/tenseal/
#ERROR: Could not find a version that satisfies the requirement tenseal (from versions: none)
#ERROR: No matching distribution found for tenseal

app = FastAPI()

#for random generation
fake = Faker()

#allow requests from localhost port 3000 (react app) using CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#DATA SCIENCE CODE HAS BEEN MINORLY CHANGED: print statements are return statements for flagging and appending matches, suspect is 1d array

#create a function for creating realistic customer data, including name, DOB, ID etc.
def create_person_data(x):
	person ={}
	for i in range(0,x):
		person[i] = {}
		person[i]['Name'] = fake.name()
		person[i]['DOB'] = fake.date_of_birth(minimum_age=16,maximum_age=120)
		#person[i]['ID'] = np.random.choice(np.arange(1000000,9999999),replace=False) #this will avoid duplicate ID numbers but runs slowly, test on your system with a small value before generating large datasets.
		person[i]['ID'] = np.random.randint(1000000,9999999) #this will include duplicate ID numbers, but runs very quickly. It should be used unless duplicates are undesireable.
		person[i]['Address'] = fake.address()
		person[i]['Country'] = fake.country()
	return  person



#plain text matching for individual
def match_plain(tar, sus):
    int1 = np.array([tar], dtype=np.int64)
    int2 = np.array([sus], dtype=np.int64)
    
    resSub = int1 - int2
    
    if (resSub) == [0]:
        return f"Person ID {tar} has matched to suspect ID: {sus}"

#hashmatching for individual
def match_hash(tar, sus):
	tar = str(tar)
	sus = str(sus)
	ec1 = tar.encode()
	ec2 = sus.encode()
	
	hash1 = hashlib.sha256(ec1).hexdigest()
	hash2 = hashlib.sha256(ec2).hexdigest()

	if hash1 == hash2:
		return f"Person ID {tar} has matched to suspect ID: {sus}"

#PROBLEMS WITH PYHPEL RESULT IN THIS NOT WORKING, CALLING IT WILL THROW ERROR IN CURRENT IMPLEMENTATION
#homomorphic matching for individual
#def match_HE(tar, sus):

#	int1 = np.array([tar], dtype=np.int64)
#	int2 = np.array([sus], dtype=np.int64)
	
#	ctxt1 = HE.encryptInt(int1)
#	ctxt2 = HE.encryptInt(int2)
	
#	ctxtSub = ctxt1 - ctxt2
#	resSub = HE.decryptInt(ctxtSub)
	
#	if (resSub[0]) == 0:
#		return f"Person ID {tar} has matched to suspect ID: {sus}"

#plain text matching for list
def listmatch_plain(tar, sus):
    matches = []
    for l in range(0, (len(sus))):
        for t in range(0, (len(tar))):
                match_res = match_plain(tar[t], sus[l])
                if match_res:
                    matches.append(match_res)
    return matches

#hash matching for list
def listmatch_hash(tar, sus):
    matches = []
    for l in range(0, (len(sus))):
        for t in range(0, (len(tar))):
                match_res = match_hash(tar[t], sus[l])
                if match_res:
                    matches.append(match_res)
    return matches

#homomorphic matching for list
#def listmatch_HE(tar, sus):
#    matches = []
#    for l in range(0, (len(sus))):
#        for t in range(0, (len(tar))):
#                match_res = match_HE(tar[t], sus[l])
#                if match_res:
#                    matches.append(match_res)
#    return matches    


#TOKTAM SOLUTION FOR HE (SEE ABOVE FOR DEPENCY ISSUES USING tenseal):
def homomorphic_search(suspicious_list, shared_list):
    # Initialize TenSEAL context with a higher scale
    context = ts.context(ts.SCHEME_TYPE.CKKS, 8192, 7)
    scale = 2 ** 40  # to be adjusted if needed

    # Create polynomial from suspicious list
    polynomial = create_polynomial(suspicious_list)
    # print(f"Polynomial: {polynomial}")

    # Create matches list
    matches = []

    # Evaluate the polynomial at each entry in the shared list
    for shared in shared_list:
        encrypted_shared = ts.ckks_vector(context, [shared], scale)
        result = ts.ckks_vector(context, [0], scale)

        # Evaluate the polynomial at the encrypted value
        for i, coef in enumerate(polynomial.as_coefficients_dict().values()):
            encrypted_coef = ts.ckks_vector(context, [coef], scale)
            term = encrypted_shared ** i * encrypted_coef
            result += term

        decrypted_result = result.decrypt()[0]

        # may be needed to debugging
        # print(f"Evaluating for {shared}: Decrypted Result = {decrypted_result}")

        # Direct evaluation for comparison
        direct_result = evaluate_polynomial(polynomial, shared)
        # print(f"Directly evaluating for {shared}: Result = {direct_result}")

        # Check for match with a tight threshold
        if abs(decrypted_result) < 1e-7 or abs(direct_result) < 1e-7:  # Adjusted check
            matches.append(shared)

    return matches

#changed to take parameter int which determines fraud data generation rather than arbitrary value
#THERE IS AN ERROR IN DATA SCIENCE TEAMS PROVIDED CODE: AttributeError: 'Generator' object has no attribute 'datetime'
#ON RESOLVING THIS THERE IS AN OUT OF BOUNDS ERROR BY EXCEEDING 32 BIT INTEGER MAX VALUE:   File "C:\Users\Ross\Desktop\Uni Stuff\Team Project A\Dual CSV FastAPI w-DS code\FastAPI\main.py", line 127, in <listcomp>
    #"Sender_account": np.random.randint(1, 10000000000),
    #                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    #File "numpy\\random\\mtrand.pyx", line 780, in numpy.random.mtrand.RandomState.randint
    #File "numpy\\random\\_bounded_integers.pyx", line 2881, in numpy.random._bounded_integers._rand_int32
#ON RESOLVING THIS THERE IS NOW AN ERROR 'Generator' object has no attribute 'finance'. DOCUMENTATION STATES THIS IS NOT THE CASE, UNABLE TO RESOLVE
def create_fraud_data(num_entries):
    AML_Data_Gen = pd.DataFrame(
        [
            {
            #"Time": fake.datetime.formatted_time(),
            #"Date": fake.datetime.formatted_date(start=2023, end=2023),
            #"Sender_account": np.random.randint(1, 10000000000),
            #"Receiver_account": np.random.randint(1, 10000000000),
            "Time": fake.date_time_between(start_date='-1y', end_date='now').strftime('%H:%M:%S'),
            "Date": fake.date_time_between(start_date='-1y', end_date='now').strftime('%Y-%m-%d'),
            "Sender_account": np.random.randint(1, 10000000000, dtype=np.int64),
            "Receiver_account": np.random.randint(1, 10000000000, dtype=np.int64),

            #THE REST IF THE COMMENTED OUT CODE PRESENTED ERROS, DATA SCIENCE TEAM SHOULD EVALUATE MY FIXES TO ENSURE THEY ARE HAPPY WITH CODE
            #"Amount": fake.finance.price(),
            "Amount": fake.random_number(digits=random.randint(1, 6)),
            #"Payment_currency": fake.finance.currency_iso_code(),
            "Payment_currency": fake.currency_code(),
            #"Received_currency": fake.finance.currency_iso_code(),
            "Received_currency": fake.currency_code(),
            #"Sender_bank_location": fake.address.country_code(),
            #"Receiver_bank_location": fake.address.country_code(),
            "Sender_bank_location": fake.country(),
            "Receiver_bank_location": fake.country(),
           
            #"Payment_type": fake.choice(['Credit card', 'Debit card', 'Cheque', 'ACH', 'Cross-border', 'Cash Withdrawal', 'Cash Deposit']),
            "Payment_type": fake.random_element(['Credit card', 'Debit card', 'Cheque', 'ACH', 'Cross-border', 'Cash Withdrawal', 'Cash Deposit']),

            "Is_laundering": np.random.choice([0, 1], p=[0.99, 0.01]),
            #"Laundering_type": fake.choice(['Normal_Small_Fan_Out', 'Normal_Fan_Out', 'Normal_Fan_In', 'Normal_Group', 'Normal_Cash_Withdrawal', 'Normal_Cash_Deposits',
            "Laundering_type": fake.random_element(['Normal_Small_Fan_Out', 'Normal_Fan_Out', 'Normal_Fan_In', 'Normal_Group', 'Normal_Cash_Withdrawal', 'Normal_Cash_Deposits',
                                            'Normal_Periodical', 'Normal_Plus_Mutual', 'Normal_Mutual', 'Normal_Foward', 'Normal_single_large', 'Structuring',
                                            'Cash_Withdrawal', 'Deposit-Send', 'Smurfing', 'Layered_Fan_In', 'Layered_Fan_Out', 'Stacked Bipartite', 'Behavioural_Change_1',
                                            'Bipartite', 'Cycle', 'Fan_In', 'Gather-Scatter', 'Behavioural_Change_2', 'Scatter-Gather', 'Single_large', 'Fan_Out', 'Over-Invoicing'])
            }
            for _ in range(num_entries)
        ]
    )

    return AML_Data_Gen



#changed to only have one date (date of transaction)
class Transaction(BaseModel):
    transaction_id: str
    date: str
    transaction_type: str
    credit_amt: int
    debit_amt: int
    balance: int

#changed to match requested behaviour (one parameter dictating number of transactions to be generated)
def generate_transaction_list(num_transactions: int):
    transaction_list = []
    current_date = datetime.now()
    #starting balance is random now
    start_balance = random.randint(0, 50000)
    balance = start_balance

    for _ in range(num_transactions):
        transaction_id = str(uuid.uuid4())
        transaction_date = current_date.strftime("%d-%m-%Y")
        transaction_type = random.choice(["credit", "debit"])
        
        if transaction_type == "credit":
            credit_amt = random.randint(100, 4000)
            debit_amt = 0
            balance += credit_amt
        else:
            credit_amt = 0
            debit_amt = random.randint(100, 4000)
            balance -= debit_amt
        
        transaction = Transaction(
            transaction_id=transaction_id,
            date=transaction_date,
            transaction_type=transaction_type,
            credit_amt=credit_amt,
            debit_amt=debit_amt,
            balance=balance
        )
        transaction_list.append(transaction)
        
        days_to_add = random.randint(1, 7)
        current_date += timedelta(days=days_to_add)
    
    return transaction_list


@app.post("/findMatchesPlain")
async def find_matches_plain(suspect_file: UploadFile = File(...), customer_file: UploadFile = File(...)):
    suspect_data = (await suspect_file.read()).decode('utf-8')
    customer_data = (await customer_file.read()).decode('utf-8')


    suspect_file_obj = io.StringIO(suspect_data)
    customer_file_obj = io.StringIO(customer_data)

    df0 = pd.read_csv(customer_file_obj)
    df1 = pd.read_csv(suspect_file_obj)
    customers = df0['ID'].to_list()
    suspects = df1['ID'].to_list()

    matches = listmatch_plain(customers, suspects)

    return {"matches": matches}

@app.post("/findMatchesHashed")
async def find_matches_hashed(suspect_file: UploadFile = File(...), customer_file: UploadFile = File(...)):
    suspect_data = (await suspect_file.read()).decode('utf-8')
    customer_data = (await customer_file.read()).decode('utf-8')


    suspect_file_obj = io.StringIO(suspect_data)
    customer_file_obj = io.StringIO(customer_data)

    df0 = pd.read_csv(customer_file_obj)
    df1 = pd.read_csv(suspect_file_obj)
    customers = df0['ID'].to_list()
    suspects = df1['ID'].to_list()

    matches = listmatch_hash(customers, suspects)

    return {"matches": matches}

#TOKTAMS SOLUTION FOR HE MATCHING (AGAIN, SEE IMPORT SECTION FOR DEPENDENCY ISSUES):

def create_polynomial(suspicious_list):
    x = Symbol('x')
    polynomial = 1
    for s in suspicious_list:
        polynomial *= (x - s)
    return expand(polynomial)


def evaluate_polynomial(polynomial, value):
    return polynomial.evalf(subs={Symbol('x'): value})


@app.post("/findMatchesHomomorphic")
async def find_matches_HE(suspect_file: UploadFile = File(...), customer_file: UploadFile = File(...)):
    suspect_data = (await suspect_file.read()).decode('utf-8')
    customer_data = (await customer_file.read()).decode('utf-8')


    suspect_file_obj = io.StringIO(suspect_data)
    customer_file_obj = io.StringIO(customer_data)

    df0 = pd.read_csv(customer_file_obj)
    df1 = pd.read_csv(suspect_file_obj)
    customers = df0['ID'].to_list()
    suspects = df1['ID'].to_list()

    matches = homomorphic_search(customers, suspects)

    return {"matches": matches}

class DataRequest(BaseModel):
    number_input: int

@app.post("/generatePersonData")
async def generate_person_data(request: DataRequest):
    #debug print
    #return {"message": f"data received: {num_people} people"}

    num_people = request.number_input
    #data science teams code (minus print statments)
    #starts the timer (unused in current implementation)
    tic = time.perf_counter() 
    df = pd.DataFrame(create_person_data(num_people)).transpose() 
    #ends the timer (unused in current implementation)
    toc = time.perf_counter() 

    #outputs the dataframe to a csv file
    df.to_csv("customers.csv") 
    
    #return the CSV file (see https://fastapi.tiangolo.com/reference/responses/ for notes on returning files if altering this at a later date)
    with open("customers.csv", "rb") as file:
        csv_file = file.read()
    
    return StreamingResponse(io.BytesIO(csv_file), media_type="text/csv", headers={"Content-Disposition": "attachment;filename=people.csv"})


@app.post("/generateFraudData")
async def generate__fraud_data(request: DataRequest):
    num_cases = request.number_input
    AML_Data_Gen = create_fraud_data(num_cases)

    AML_Data_Gen.to_csv("fraud_data.csv")

    with open("fraud_data.csv", "rb") as file:
        csv_file = file.read()

    return StreamingResponse(io.BytesIO(csv_file), media_type="text/csv", headers={"Content-Disposition": "attachment;filename=fraud_data.csv"})



@app.post("/generateTransactionsData")
async def generate_transaction_data(request: DataRequest):
    
    num_transactions = request.number_input
    transactions = generate_transaction_list(num_transactions)

    #vonverting transactions to a DataFrame to maintain consistency with other methods of returning CSV
    transaction_data = {
        "transaction_id": [t.transaction_id for t in transactions],
        "date": [t.date for t in transactions],
        "transaction_type": [t.transaction_type for t in transactions],
        "credit_amt": [t.credit_amt for t in transactions],
        "debit_amt": [t.debit_amt for t in transactions],
        "balance": [t.balance for t in transactions]
    }
    df = pd.DataFrame(transaction_data)

    df.to_csv("transactions.csv")

    with open("transactions.csv", "rb") as file:
        csv_file = file.read()

    return StreamingResponse(io.BytesIO(csv_file), media_type="text/csv", headers={"Content-Disposition": "attachment;filename=transactions.csv"})


#FOR HE DEMO:
class EncryptRequest(BaseModel):
    value: int

class DecryptRequest(BaseModel):
    encrypted_value: int

@app.post("/encrypt")
def encrypt(request: EncryptRequest):
    encrypted_value = 4 * request.value + 4
    return {"encrypted_value": encrypted_value}

@app.post("/decrypt")
def decrypt(request: DecryptRequest):
    decrypted_value = (request.encrypted_value - 8) / 4
    return {"decrypted_value": decrypted_value}


#CODE FOR FL DEMONSTRATION PORTION:
#I Have been working with this code provided by the data science team, which now runs and provides a meaningful output, but encounters and raises some errors. 
#While these are non fatal errors, and values are returned and displayed allong with 200OK response, this should be refined in future
class FLInput(BaseModel):
    num_records: int
    fraud_percentage: float
    num_clients: int

def generate_credit_card_data(num_records, fraud_percentage):
    data = {
        "ID": range(1, num_records + 1),
        "Transaction Date": [fake.date_this_year() for _ in range(num_records)],
        "Credit Card Number": [fake.credit_card_number(card_type=None) for _ in range(num_records)],
        "Merchant": [fake.company() for _ in range(num_records)],
        "Transaction Amount": [round(random.uniform(1, 1000), 2) for _ in range(num_records)],
        "Transaction Type": [random.choice(["POS", "Online", "Direct Debit"]) for _ in range(num_records)],
        "Account Balance": [round(random.uniform(0, 100000), 2) for _ in range(num_records)],
        "Customer Age": [random.randint(18, 90) for _ in range(num_records)],
        "Customer Gender": [random.choice(["Male", "Female"]) for _ in range(num_records)],
        "Is Fraud": [1 if random.random() < fraud_percentage else 0 for _ in range(num_records)]
    }
    return pd.DataFrame(data)

def preprocess_data(df):
    df = df.drop(columns=["ID", "Transaction Date", "Credit Card Number", "Merchant"])
    le_transaction_type = LabelEncoder()
    le_customer_gender = LabelEncoder()
    df["Transaction Type"] = le_transaction_type.fit_transform(df["Transaction Type"])
    df["Customer Gender"] = le_customer_gender.fit_transform(df["Customer Gender"])
    scaler = StandardScaler()
    df[["Transaction Amount", "Account Balance", "Customer Age"]] = scaler.fit_transform(df[["Transaction Amount", "Account Balance", "Customer Age"]])
    X = df.drop(columns=["Is Fraud"])
    y = df["Is Fraud"]
    return X, y

class CreditCardClient(fl.client.NumPyClient):
    def __init__(self, model, x_train, y_train, x_test, y_test):
        self.model = model
        self.x_train = x_train
        self.y_train = y_train
        self.x_test = x_test
        self.y_test = y_test

    def get_parameters(self, config=None):
        return [self.model.coef_.ravel(), self.model.intercept_]

    def fit(self, parameters, config):
        self.model.coef_ = np.array(parameters[0]).reshape(1, -1)
        self.model.intercept_ = np.array(parameters[1])
        self.model.fit(self.x_train, self.y_train)
        return [self.model.coef_.ravel(), self.model.intercept_], len(self.x_train), {}

    def evaluate(self, parameters, config):
        self.model.coef_ = np.array(parameters[0]).reshape(1, -1)
        self.model.intercept_ = np.array(parameters[1])
        predictions = self.model.predict(self.x_test)
        accuracy = accuracy_score(self.y_test, predictions)
        return 1 - accuracy, len(self.x_test), {"accuracy": accuracy}

def start_fl_server(num_rounds=3):
    strategy = fl.server.strategy.FedAvg()
    fl.server.start_server(server_address="127.0.0.1:8081", strategy=strategy, config={"num_rounds": num_rounds})

def start_fl_client(client_id):
    with open(f'client_{client_id}_data.pkl', 'rb') as f:
        X, y = pickle.load(f)

    model = LogisticRegression()
    split_index = int(0.8 * len(X))
    x_train, x_test = X[:split_index], X[split_index:]
    y_train, y_test = y[:split_index], y[split_index:]

    client = CreditCardClient(model, x_train, y_train, x_test, y_test)
    fl.client.start_numpy_client(server_address="127.0.0.1:8081", client=client)

def run_federated_learning(num_clients, num_rounds=3):
    try:
        mp.set_start_method("spawn")
    except RuntimeError:
        pass

    server_process = mp.Process(target=start_fl_server, args=(num_rounds,))
    server_process.start()

    client_processes = []
    for i in range(num_clients):
        p = mp.Process(target=start_fl_client, args=(i,))
        client_processes.append(p)
        p.start()

    for p in client_processes:
        p.join()

    server_process.terminate()

def centralized_training_evaluation(X, y):
    scaler = StandardScaler()
    X = scaler.fit_transform(X)

    model = LogisticRegression()
    model.fit(X, y)

    predictions = model.predict(X)
    accuracy = accuracy_score(y, predictions)
    return accuracy

@app.post("/run_fl")
def run_federated_learning_endpoint(input_data: FLInput):
    num_records = input_data.num_records
    fraud_percentage = input_data.fraud_percentage
    num_clients = input_data.num_clients

    if num_clients < 3 or num_clients > 10:
        raise HTTPException(status_code=400, detail="Number of clients must be between 3 and 10.")
    
    if num_records <= 0 or num_records > 100000:
        raise HTTPException(status_code=400, detail="Number of records must be between 1 and 100,000.")

    # Generate and preprocess data
    client_data = []
    for i in range(num_clients):
        df = generate_credit_card_data(num_records, fraud_percentage)
        X, y = preprocess_data(df)
        client_data.append((X, y))
        with open(f'client_{i}_data.pkl', 'wb') as f:
            pickle.dump((X, y), f)

    run_federated_learning(num_clients - 1, num_rounds=3)

    # Evaluate Federated Model on the remaining dataset
    X_test, y_test = client_data[-1]
    scaler = StandardScaler()
    X_test = scaler.fit_transform(X_test)

    # Load the final federated model (from the last client)
    with open(f'client_{num_clients - 2}_data.pkl', 'rb') as f:
        X_last_client, y_last_client = pickle.load(f)

    model = LogisticRegression()
    model.fit(X_last_client, y_last_client)
    predictions = model.predict(X_test)
    federated_accuracy = accuracy_score(y_test, predictions)

    # Centralized Model for Comparison
    X, y = client_data[0]
    centralized_accuracy = centralized_training_evaluation(X, y)

    return {
        "federated_accuracy": federated_accuracy,
        "centralized_accuracy": centralized_accuracy
    }

#SERVER TERMINAL COMMAND = python -m uvicorn main:app --reload --port 3003 
#OR ANY PORT NUMBER, BUT MUST BE SAME AS URL USED IN MATCH HANDLER FUNCTION IN REACT APP
