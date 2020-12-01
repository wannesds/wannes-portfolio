import React from 'react';
import './Home.scss';
import Header from './Header';
import './Home.scss';
import Home_link from './Home_link';
import Home_animation from './Home_animation';


const Home = () => {

    return(
        <div className="home-box">
            <Header/> 
            <Home_animation className="animation"/>
            <div className="home-nav">
                <Home_link icon="〈〉" type="CODE"/>
                <Home_link icon="｛｝" type="DESIGN"/>
                <Home_link icon="〔〕" type="ART"/>
            </div>
        </div>
    )
}

export default Home;