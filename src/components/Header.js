import React from 'react';
import './Header.scss';
import Headroom from 'react-headroom';

const Header = () => {

    return(
        <Headroom>
        {/* show/hides content when scrolling up/down */}
        <header className="w-100"> 
             <div className="img"></div>  
        </header>
        </Headroom>
    )
}

export default Header;