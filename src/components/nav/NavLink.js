import React from 'react';

const NavLink = ({name}) => {

    return(
        <div className="nav-link">
            <a href={`#${name}`}>{name}</a>
        </div>
    )
}

export default NavLink;