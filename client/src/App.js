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
import RegistrationPage from "./Registration/Registration";
import DSImplementaion from "./ListMatchingDemonstration/DSImplementation"
import HEDemo from './HEDemonstration/HEDemo';
import FLDemo from './FLDemonstration/FLDemo';
import FLOverview from './FLOverview/FLOverview';
import HEOverview from './HEOverview/HEOverview';
import DPOverview from './DPOverview/DPOverview';
import SMPCOverview from './SMPCOverview/SMPCOverview';

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
                <Route path='/HEDemonstration' element = {<HEDemo/>}/>
                <Route path='/FLDemonstration' element = {<FLDemo/>}/>
                <Route path='/FLOverview' element = {<FLOverview/>}/>
                <Route path='/HEOverview' element = {<HEOverview/>}/>
                <Route path='/DPOverview' element = {<DPOverview/>}/>
                <Route path='/SMPCOverview' element = {<SMPCOverview/>}/>

            </Routes>
            <FooterPanel/>
        </div>
    );
}

export default App;
