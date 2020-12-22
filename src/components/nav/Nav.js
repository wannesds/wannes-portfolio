import React, {useState} from 'react';
import './Nav.scss';
import NavLink from './NavLink';
import {ReactComponent as NavSvg} from "../_assets/menu-A.svg";
import navItems from '../_assets/data';

const Nav = () => {
    

    const [hideNav, setHideNav] = useState(true);

    const doShowNav = () => {
        setHideNav(false);
    } 
    const doHideNav = () => {
        setHideNav(true);
    }
    return(
        <div className="nav-box"  onMouseLeave={doHideNav} onTouchEnd={doHideNav}>
            { hideNav ? //show nav logo only
                <div className="wrapper-svg">
                    <NavSvg className="nav-svg" onClick={doShowNav} onMouseOver={doShowNav} onTouchStart={doShowNav}/>
                </div>
                : //show nav list only
                <div className="nav-list">
                {
                    navItems.map((item)=>
                        <NavLink key={item.id} name={item.name}/>
                    )
                }
                </div>
            } 
        </div>
    )
}

export default Nav;