import React from 'react';
// import {Link} from 'react-navigation';
import './Home_link.scss';



const Home_link = ({icon, type}) => {

    return(
        <div className="home_link">
            <span>{icon.slice(0,1)}</span>
            <a href="">{type}</a>
            {/* <Link to="#Code">{type}</Link> */}
            <span> {icon.slice(1,2)}</span>
        </div>
    )
}

export default Home_link;