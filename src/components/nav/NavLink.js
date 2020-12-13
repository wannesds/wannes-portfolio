import React from 'react';
import './NavLink.scss';

const NavLink = ({name}) => {

    return(
        <div className="nav-link">
            <a href={`#${name}`}>{name}</a>
        </div>
    )
}

export default NavLink;