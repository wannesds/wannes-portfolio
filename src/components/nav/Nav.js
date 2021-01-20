import React, {useState} from 'react';
import './Nav.scss';
import NavLink from './NavLink';
import {ReactComponent as NavOpenSVG} from "../_assets/menu-open.svg";
import {ReactComponent as NavCloseSVG} from "../_assets/menu-close.svg";

const Nav = () => {
    const navItems = ["Home", "About", "Code", "Design", "Art", "Contact"];
    const [hideNav, setHideNav] = useState(true);

    const doShowNav = () => {
        setHideNav(false);
    } 
    const doHideNav = () => {
        setHideNav(true);
    }
    console.log(navItems);
    return( // !! fix this by using cancel svg to close nav menu
        <div className="nav-box"  onMouseLeave={doHideNav} onTouchCancel={doHideNav} onTouchMove={doHideNav}>
            { hideNav ? //show nav logo only
                <div className="wrapper-svg"> 
                    <NavOpenSVG className="nav-svg" onClick={doShowNav}/>
                </div>
                : //show nav list only
    
                <div className="nav-list">
                    <NavCloseSVG className="nav-svg" onClick={doHideNav}/>
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