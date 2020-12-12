import React, {useState} from 'react';
import './Nav.scss';
import Nav_item from './Nav_item';
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

    const [activeNav, setActiveNav] = useState(true);

    const showNav = () => {
        setActiveNav(false);
    } 
    const hideNav = () => {
        setActiveNav(true);
    }
    return(
        <div className="nav-box" onMouseLeave={hideNav}>
            <NavSvg fill="red" className="nav-svg" onMouseOver={showNav}/>
            <div className="nav-list" hidden={activeNav} >
                {
                    items.map((item)=>
                        <Nav_item key={item.id} name={item.name}/>
                    )
                }
            </div>
        </div>
    )
}

export default Nav;