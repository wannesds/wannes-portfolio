import React, {useState, useEffect } from 'react';
import './Nav.scss';
import Nav_item from './Nav_item';

function Nav() {
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
            <a className="menu_button" onMouseOver={showNav}>
                svg
            </a>
            <div hidden={activeNav} >
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