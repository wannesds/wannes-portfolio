import React, {useState} from 'react';
import './Nav.scss';
import NavLink from './NavLink';
import {ReactComponent as NavSvg} from "../SVG/menu-A.svg";

const Nav = () => {
    const items = [
        {
            key: 1, 
            name: "home"
        },
        {
            key: 2,
            name: "about"
        }, 
        {
            key: 3,
            name: "code"
        }, 
        {
            key: 4,
            name: "design"
        },
        {
            key: 5,
            name: "art"
        },
        {
            key: 6,
            name: "contact"
        }
    ];

    const [hideNav, setHideNav] = useState(true);

    const doShowNav = () => {
        setHideNav(false);
    } 
    const doHideNav = () => {
        setHideNav(true);
    }
    return(
        <div className="nav-box"  onMouseLeave={doHideNav}>
            <NavSvg fill="red" className="nav-svg" onClick={doShowNav}/>
            { hideNav ? <div></div> :

                <div className="nav-list">
                {
                    items.map((item)=>
                        <NavLink key={item.id} name={item.name}/>
                    )
                }
                </div>
            } 
        </div>
    )
}

export default Nav;