# Privacy Technology Project (PTFI)_web  
 Web development for Privacy Technology Project (PTFI)  

This is a simple academic paper website project, similar to IEEE, built using the React framework and Node.js. The goal of this project is to provide a platform where users can register, log in, and view basic information on the homepage.  

## Prerequisites  

Before you begin, ensure you have installed the following on your development environment:  

- Node.js (latest stable version recommended)  
- npm (usually installed with Node.js)  
- Git  

## Repository Overview

|Directory|Description|
|---|---|
|/|Contains the NodeJS server.|
|/client|Contains the React application that is served by the NodeJS server.|
|/shell_scripts|Contains bash shell scripts for building the server.|

## Installation Steps  

### Clone the Repository  

First, clone the project to your local machine:  

git clone  https://github.com/DataBytes-Organisation/PTFI_web.git
  
### Install Backend Dependencies  
Navigate to the project root directory and install the required backend dependencies: 
```  
cd PTFI_web  
npm install  
```  
### Install Frontend Dependencies  
The project uses React for the frontend, so you need to install related dependencies. Navigate to the client folder and run the npm install command:
```  
cd client  
npm install  
```  
### Start the Project  
**Start the Backend Server**

From the project root directory, use the following command to start the backend server that serves the website:  
```  
node server.js  
```
The backend server supports both HTTP and HTTPs protocols. It expects SSL scripts to be located at ./ssl (see server.js for the filenames).

```
# http port 5000 like default  
node server.js --protocol http --port 5000
```

```
# https port 5050
node server.js --protocol https --port 5050
```

Both --protocol and --port are optional. --protocol defaults to http and --port defaults to 5000

**Start the React Development Server**

Open a new terminal window, make sure you are still in the client folder, then use the following command to start the frontend development server:  
```  
npm start
```  
This will automatically open a new tab in your default browser and navigate to http://localhost:3000 to display the frontend interface of the project.

## Feature Overview  
The current version of the project supports the following features:  

Communication between a local server and the client  
User registration and login (further implementation required)  
Display of the homepage, containing a simple greeting: "This is the main page"
  
## Contribution Guidelines  
We welcome all forms of contributions, whether it's proposing new features, bug fixes, or documentation improvements. If you would like to contribute code, please follow these steps:  

Create your feature branch 
Commit your changes 
Push to the branch 
Create a new Pull Request to have it reviewed. Merge only after it is approved by a reviewer.
  
## License  
This project is licensed under the MIT License. For more information, please see the LICENSE file.  


  


