import React from 'react';
import './Home.scss';
import Header from '../Header';
import './Home.scss';
import Home_link from './Home_link';
import Home_animation from './Home_animation';


const Home = () => {

    return(
        <div className="home-box">
            <Header/> 
            <Home_animation className="animation"/>
            <div className="home-nav">
                <Home_link icon="〈〉" type="Code"/>
                <Home_link icon="｛｝" type="Design"/>
                <Home_link icon="〔〕" type="Art"/>
            </div>
            
        </div>
    )
}

export default Home;