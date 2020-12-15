import React from 'react';
import './Header.scss';
import Headroom from 'react-headroom';
import Nav from '../nav/Nav.js';
import Logo from '../logo/Logo.js';

const Header = () => {

    return(
        <Headroom>{/* show/hides content when scrolling up/down */}
            <header> 
                <Logo/>
                <Nav/>
            </header>
        </Headroom>
    )
}

export default Header;