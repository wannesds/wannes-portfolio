import React from 'react';
import './Logo.scss';
import {ReactComponent as LogoSvg} from '../_assets/logo-WD-D.svg';

const Logo = () => {
    return(
        <div className="wrapper-svg">
            <LogoSvg className="logo-svg"/>
        </div>
    )
}

export default Logo;