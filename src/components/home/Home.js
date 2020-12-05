import React from 'react';
import './Home.scss';
import Header from '../Header';
import './Home.scss';
import Home_link from './Home_link';
import Home_animation from './Home_animation';


const Home = () => {

    return(
        <div id="home" className="home-box">
            <Header/> 
            <Home_animation className="animation"/>
            <div className="home-nav">
                <Home_link icon="〈〉" type="code"/>
                <Home_link icon="｛｝" type="design"/>
                <Home_link icon="〔〕" type="art"/>
            </div>
            
        </div>
    )
}

export default Home;