import React from 'react';
import './Logo.scss';
import {ReactComponent as LogoSvg} from '../_assets/logo-WD-D.svg';

const Logo = () => {
    return(
        <div className="wrapper-svg">
            <LogoSvg className="logo-svg" onClick={() => alert("Tip: click to create particles !")}/>
        </div>
    )
}

export default Logo;