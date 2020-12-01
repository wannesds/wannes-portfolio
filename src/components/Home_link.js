import React from 'react';
import './Home_link.scss';



const Home_link = ({sign, name}) => {

    return(
        <div className="home_link center">
            <span>{sign.slice(0,1)}</span>
            <a href="" className="ph1">{name}</a>
            <span> {sign.slice(1,2)}</span>
        </div>
    )
}

export default Home_link;