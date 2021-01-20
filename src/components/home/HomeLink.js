import React from 'react';
import './HomeLink.scss';



const HomeLink = ({icon, type}) => {

    return(
        <div className="home-link">
            {/* <span>{icon.slice(0,1)}</span> */}
            <a href={`#${type}`}>{type}</a>
            {/* <span>{icon.slice(1,2)}</span> */}
        </div>
    )
}

export default HomeLink;