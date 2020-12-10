import React from 'react';
import './Header.scss';
import Headroom from 'react-headroom';
import Nav from './nav/Nav.js';
import {ReactComponent as Mylogo} from './SVG/logo-WD-D.svg';

const Header = () => {

    return(
        <Headroom>
        {/* show/hides content when scrolling up/down */}
        <header className="w-100"> 
             <Mylogo className="logo-svg"/> 
             <Nav/>
        </header>
        </Headroom>
    )
}

export default Header;