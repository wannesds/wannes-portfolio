import React from 'react';
import './Home.scss';
import Header from '../Header';
import './Home.scss';
import Home_link from './HomeLink';
import Animation from './Animation';



const Home = () => {

    return(
        <div id="home" className="home-box">
            <Animation/>
            <Header/> 
            <div id="homelinks" className="home-links-box">
                <Home_link icon="〈〉" type="code"/>
                <Home_link icon="｛｝" type="design"/>
                <Home_link icon="〔〕" type="art"/>
            </div>
            
        </div>
    )
}

export default Home;