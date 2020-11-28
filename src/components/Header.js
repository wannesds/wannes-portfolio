import React from 'react';
import './Header.scss';
import Headroom from 'react-headroom';
import {ReactComponent as WDLogo} from '../SVG/WD-Logo.svg';

const Header = () => {

    return(
        <Headroom>
        {/* show/hides content when scrolling up/down */}
        <header className="w-100"> 
             <WDLogo className='logo'/> 
        </header>
        </Headroom>
    )
}

export default Header;