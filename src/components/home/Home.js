import React from 'react';
import './Home.scss';
import Header from '../header/Header';
import './Home.scss';
import HomeLink from './HomeLink';
import Animation from './Animation';

const Home = () => {

    return(
        <div id="home" className="home-box">
            <Animation/>
            <Header/> 
            <div id="homelinks" className="home-links-box">
                <HomeLink icon="〈〉" type="code"/>
                <HomeLink icon="｛｝" type="design"/>
                <HomeLink icon="〔〕" type="art"/>
            </div>
            
        </div>
    )
}

export default Home;