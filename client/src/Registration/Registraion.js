import React, { useState } from 'react';
import './Registration.css';
import Google from "../Images/Google.png";
import { auth } from '../Registration/firebaseConfig'; // Adjust path if needed
import Microsoft from "../Images/Microsoft.png";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../Registration/msalConfig"; 
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const RegistrationPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
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

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

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
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="Firstname"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Lastname"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="date"
                            name="dateOfBirth"
                            placeholder="Date of Birth"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                        />
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
                    <div className="form-group">
                        <input
                            type="text"
                            name="occupation"
                            placeholder="Occupation"
                            value={formData.occupation}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="address"
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
                        <label>Remember Me</label>
                    </div>
                    <div className="form-group">
                        <input
                            type="checkbox"
                            name="agreeTerms"
                            checked={formData.agreeTerms}
                            onChange={handleChange}
                            required
                        />
                        <label>I agree to all terms and Privacy Policy</label>
                    </div>
                    <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={(value) => setCaptchaValue(value)} />  
                    <button type="submit">Create Account</button>
                </form>
                <div className="or-separator">OR</div>
                <div className="social-login">
                    <button onClick={handleGoogleSignIn}>
                        <img id='Google' src={Google} alt='Google' /> Continue with Google
                    </button>
                    <button onClick={handleMicrosoftSignIn}>
                        <img id='Microsoft' src={Microsoft} alt='Microsoft' /> Continue with Microsoft
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;






// OLD CODE

// import React, { useState } from 'react';
// import './Registration.css';
// import Google from "../Images/Google.png";
// import Microsoft from "../Images/Microsoft.png";

// const RegistrationPage = () => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         dateOfBirth: '',
//         gender: '',
//         email: '',
//         phoneNumber: '',
//         password: '',
//         confirmPassword: '',
//         occupation: '',
//         address: '',
//         postalCode: '',
//         city: '',
//         state: '',
//         country: '',
//         rememberMe: false,
//         agreeTerms: false,
//     });

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData((prevState) => ({
//             ...prevState,
//             [name]: type === 'checkbox' ? checked : value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Submit form data to server or perform any necessary actions
//         console.log(formData);
//     };

//     return (
//         <div className="registration-page">
//             <div id='registration-background'>
//                 <div className='registration-text'>
//                     <h1>PTFI</h1>
//                     <h6>Privacy Technologies For Financial Intelligence</h6>
//                     <h2>Empowering Your Financial Journey</h2>
//                 </div>
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name="firstName"
//                             placeholder="Firstname"
//                             value={formData.firstName}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="lastName"
//                             placeholder="Lastname"
//                             value={formData.lastName}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="date"
//                             name="dateOfBirth"
//                             placeholder="Date of Birth"
//                             value={formData.dateOfBirth}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="gender"
//                             placeholder="Gender"
//                             value={formData.gender}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="tel"
//                             name="phoneNumber"
//                             placeholder="Phone number"
//                             value={formData.phoneNumber}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="password"
//                             name="password"
//                             placeholder="Password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="password"
//                             name="confirmPassword"
//                             placeholder="Confirm Password"
//                             value={formData.confirmPassword}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="occupation"
//                             name="occupation"
//                             placeholder="Occupation"
//                             value={formData.occupation}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="Address"
//                             name="address"
//                             placeholder="Address"
//                             value={formData.address}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name="postalCode"
//                             placeholder="Postal Code"
//                             value={formData.postalCode}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="city"
//                             placeholder="City"
//                             value={formData.city}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="text"
//                             name="state"
//                             placeholder="State"
//                             value={formData.state}
//                             onChange={handleChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="country"
//                             placeholder="Country"
//                             value={formData.country}
//                             onChange={handleChange}
//                             required
//                         />
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="checkbox"
//                             name="rememberMe"
//                             checked={formData.rememberMe}
//                             onChange={handleChange}
//                         />
//                         <label>Remember Me</label>
//                     </div>
//                     <div className="form-group">
//                         <input
//                             type="checkbox"
//                             name="agreeTerms"
//                             checked={formData.agreeTerms}
//                             onChange={handleChange}
//                             required
//                         />
//                         <label>I agree to all terms and Privacy Policy</label>
//                     </div>
//                     <button type="submit">Create Account</button>
//                 </form>
//                 <div className="or-separator">OR</div>
//                 <div className="social-login">
//                     <button><img id='Google' src={Google} alt='google'/>   Continue with Google</button>
//                     <button><img id='Microsoft' src={Microsoft} alt='Microsoft'/>   Continue with Microsoft</button>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default RegistrationPage;