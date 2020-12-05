import React from 'react';
import './Nav_item.scss';

const Nav_item = ({name}) => {

    return(
        <li className="nav_item">
            <a href={`#${name}`}>{name}</a>
        </li>
    )
}

export default Nav_item;