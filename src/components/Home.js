import React from 'react';
import './Home.scss';
import Header from './Header';
import './Home.scss';
import Home_link from './Home_link';


const Home = () => {

    return(
        <div className="home-box">
            <Header/> 
            <div className="home-nav">
                <Home_link sign="〈〉" name="CODE"/>
                <Home_link sign="｛｝" name="DESIGN"/>
                <Home_link sign="〔〕" name="ART"/>
            </div>
        </div>
    )
}

export default Home;