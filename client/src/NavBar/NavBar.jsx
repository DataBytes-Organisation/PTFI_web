import { useState } from 'react';
import './NavBar.css';
import logo from '../Images/Logo.png';
import {HashLink as Link} from 'react-router-hash-link';


function NavBar() {
    const [technicalMenuOpened, setTechnicalMenuOpened] = useState(false);
    const [membershipMenuOpened, setMembershipMenuOpened] = useState(false); // unused but kept for future use
    const [publicationMenuOpened, setPublicationMenuOpened] = useState(false); // unused but kept for future use

    const mouseLeave = () => {
        setTechnicalMenuOpened(false);
        setMembershipMenuOpened(false);
        setPublicationMenuOpened(false);
    }

    const mouseEnterTechnical = () => {
        setMembershipMenuOpened(false);
        setPublicationMenuOpened(false);
        setTechnicalMenuOpened(true);
    }

    const mouseEnterMembership = () => {
        setTechnicalMenuOpened(false);
        setPublicationMenuOpened(false);
        setMembershipMenuOpened(true);
    }

    const mouseEnterPublication = () => {
        setTechnicalMenuOpened(false);
        setMembershipMenuOpened(false);
        setPublicationMenuOpened(true);
    }

    return (
        <div id="navbar" onMouseLeave={mouseLeave}>
            <div id="logo-container">
                <Link to="/">
                    <img id="logo" src={logo} className="logo" alt="Logo"/>
                </Link>
            </div>

            <div id="nav-links">
                <Link to="/AboutUs" onMouseEnter={mouseLeave} className="nav-link">About us</Link>

                <Link to="/Technical" onMouseEnter={mouseEnterTechnical} className="nav-link">Technical</Link>
                {technicalMenuOpened && (
                    <div id="technical-menu-popover" class="nav-menu">
                        <Link to="/HEOverview" className="nav-menu-link">Homomorphic Encryption</Link>
                        <Link to="/FLOverview" className="nav-menu-link">Federated Learning</Link>
                        <Link to="/DPOverview" className="nav-menu-link">Differential Privacy</Link>
                        <Link to='/SMPCOverview' className='nav-menu-link'>Secure Multi-Party Computation</Link>
                        <Link to="/Demonstration" className="nav-menu-link">List Matching</Link>
                    </div>
                )}

                <Link to="/Membership" onMouseEnter={mouseEnterMembership} className="nav-link">Membership</Link>
                <Link to="/Publication" onMouseEnter={mouseEnterPublication} className="nav-link">Publication</Link>
            </div>

            <div id="cta-container">
                <Link to="/Join">
                    <button id="cta-button">Join PTFI</button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;
