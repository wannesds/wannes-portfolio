import React, {useState} from 'react';
import './Nav.scss';
import NavLink from './NavLink';
import {ReactComponent as NavSvg} from "../_assets/menu-A.svg";

const Nav = () => {
    const navItems = ["home", "about", "code", "design", "art", "contact"];
    const [hideNav, setHideNav] = useState(true);

    const doShowNav = () => {
        setHideNav(false);
    } 
    const doHideNav = () => {
        setHideNav(true);
    }
    console.log(navItems);
    return(
        <div className="nav-box"  onMouseLeave={doHideNav} onTouchCancel={doHideNav} onTouchMove={doHideNav}>
            { hideNav ? //show nav logo only
                <div className="wrapper-svg">
                    <NavSvg className="nav-svg" onClick={doShowNav} onMouseOver={doShowNav} onTouchStart={doShowNav}/>
                </div>
                : //show nav list only
                <div className="nav-list">
                {
                    navItems.map(item => (
                        <NavLink  name={item}/>
                    ))
                }
                </div>
            } 
        </div>
    )
}

export default Nav;