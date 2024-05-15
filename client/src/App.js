import React from 'react';
import './App.css';

import {Routes, Route} from 'react-router-dom';

import HomePage from './Home/HomePage';
import AboutUsPage from './AboutUs/AboutUsPage';
import JoinPage from './Join/JoinPage';
import MembershipPage from './Membership/MembershipPage';
import PublicationPage from './Publication/PublicationPage';
import TechnicalPage from './Technical/TechnicalPage';
import NavBar from './NavBar/NavBar';
import FooterPanel from './FooterPanel/FooterPanel';
import ContactPage from './Contact/ContactPage';
import TermsAndConditions from "./Terms&Conditions/Terms&Conditions";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import RegistrationPage from "./Registration/Registraion";
import DSImplementaion from './DataScienceCodeDemonstration/DSImplementation';
function App() {
    return (
        <div>
            {/* NAVBAR AND FOOTER-PANEL ALWAYS PRESENT, EVERYTHING ELSE DETERMINED BY URL EXTENSION USING ROUTES*/}
            <NavBar/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/index' element={<HomePage/>}/>
                <Route path='/AboutUs' element={<AboutUsPage/>}/>
                <Route path='/Membership' element={<MembershipPage/>}/>
                <Route path='/Publication' element={<PublicationPage/>}/>
                <Route path='/Technical' element={<TechnicalPage/>}/>
                <Route path='/Join' element={<JoinPage/>}/>
                <Route path='/Contact' element={<ContactPage/>}/>
                <Route path='/Terms&Conditions' element={<TermsAndConditions/>}/>
                <Route path='/PrivacyPolicy' element={<PrivacyPolicy/>}/>
                <Route path='/Registration' element={<RegistrationPage/>}/>
                <Route path='/Demonstration' element={<DSImplementaion/>}/>
            </Routes>
            <FooterPanel/>
        </div>
    );
}

export default App;
