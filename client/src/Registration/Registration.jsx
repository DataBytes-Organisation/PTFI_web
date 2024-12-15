import React, { useState } from 'react';
import './Registration.css';
import Google from "../Images/Google.png";
import { auth } from './firebaseConfig'; // Adjust path if needed
import Microsoft from "../Images/Microsoft.png";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig"; 
import ReCAPTCHA from 'react-google-recaptcha';
import {Link} from 'react-router-dom';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        specifyGender: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        occupation: '',
        address: '',
        postalCode: '',
        city: '',
        state: '',
        country: '',
        rememberMe: false,
        agreeTerms: false,
    });

    const [captchaValue, setCaptchaValue] = useState(null);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPhone, setIsValidPhone] = useState(true);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleEmailChange = (e) => {
        const {value} = e.target;
        if (value === '') {
            setIsValidEmail(null);
        }
        else {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            setIsValidEmail(emailRegex.test(value));
        }
        setFormData((prevState) => ({
            ...prevState,
            email: value
        }))
    }

    const handlePhoneChange = (e) => {
        const {value} = e.target;
        if (value === '') {
            setIsValidPhone(null);
        }
        else {
            const phoneRegex = /^(\+\d{1,2}\s?)?(\(?\d{3}\)?)[-.\s]?\d{3}[-.\s]?\d{4}$/;
            setIsValidPhone(phoneRegex.test(value));
        }
        setFormData((prevState) => ({
            ...prevState,
            phoneNumber: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaValue) {
            alert('Please complete the CAPTCHA');
            return;
        }
        // Submit form data to server or perform any necessary actions
        console.log(formData);
    };

    // Firebase Google sign-in
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log('Google Sign-In successful:', user);
            })
            .catch((error) => {
                console.error('Google Sign-In error:', error);
            });
    };

    // MSAL Microsoft sign-in
    const msalInstance = new PublicClientApplication(msalConfig);

    const handleMicrosoftSignIn = async () => {
        try {
            const loginResponse = await msalInstance.loginPopup({
                scopes: ["user.read"],
            });
            console.log('Microsoft Sign-In successful:', loginResponse);
        } catch (error) {
            console.error('Microsoft Sign-In error:', error);
        }
    };

    return (
        <div className="registration-page">
            <div id='registration-background'>
                <div className='registration-text'>
                    <h1>PTFI</h1>
                    <h6>Privacy Technologies For Financial Intelligence</h6>
                    <h2>Empowering Your Financial Journey</h2>
                </div>
                <h2>Create your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <label for="dateOfBirth">Date of Birth</label>
                    <div className="form-group-single">
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <label for="gender">Gender</label>
                    <div className="form-group-single">
                        <select
                            name="gender"
                            placeholder="Select an option..."
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="non-binary">Non-Binary</option>
                            <option value="other">Other</option>
                        </select>
                        {formData.gender === "other" && (
                            <input
                            type="text"
                            name="specifyGender"
                            placeholder="Please specify..."
                            value={formData.specifyGender}
                            onChange={handleChange}
                            required
                        />
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleEmailChange}
                            required
                            className = {formData.email === '' ? 'defaultInput' : isValidEmail === null ? 'defaultInput' : isValidEmail ? 'validInput' : 'invalidInput'}
                        />
                        {isValidEmail === false && (
                            <p className="errorText">Please enter a valid email address</p>
                        )}
                        <input
                            type="tel"  
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formData.phoneNumber}
                            onChange={handlePhoneChange}
                            required
                            className = {formData.phoneNumber === '' ? 'defaultInput' : isValidPhone === null ? 'defaultInput' : isValidPhone ? 'validInput' : 'invalidInput'}
                        />
                        {isValidPhone === false && (
                            <p className="errorText">Please enter a valid phone number</p>
                        )}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group-single">
                        <input
                            type="text"
                            name="occupation"
                            className="occupation"
                            placeholder="Occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group-single">
                        <input
                            type="text"
                            name="address"
                            className="address"
                            placeholder="Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal Code"
                            value={formData.postalCode}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="country"
                            placeholder="Country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                        />
                        <label className="checkbox-label">Remember me</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label className="checkbox-label">
                            I have read and agreed to the{' '}
                            <Link to="/PrivacyPolicy">Privacy Policy</Link>{' '}
                            and the{' '}
                            <Link to="/Terms&Conditions">Terms and Conditions</Link>.
                        </label>
                    </div>
                    <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={(value) => setCaptchaValue(value)} />  
                    <button type="submit">Create Account</button>
                </form>
                <div className="or-separator">OR</div>
                <div className="form-group-single">
                    <button className="socials" onClick={handleGoogleSignIn}>
                        <img id='Google' src={Google} alt='Google' /> Continue with Google
                    </button>
                </div>
                <div className="form-group-single">
                    <button className="socials" onClick={handleMicrosoftSignIn}>
                        <img id='Microsoft' src={Microsoft} alt='Microsoft' /> Continue with Microsoft
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;