import React from 'react';
import './Nav_item.scss';

const Nav_item = ({name}) => {

    return(
        <div className="nav-item">
            <a href={`#${name}`}>{name}</a>
        </div>
    )
}

export default Nav_item;