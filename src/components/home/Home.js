import React from 'react';
import './Home.scss';
import Header from '../header/Header';
import './Home.scss';
import HomeLink from './HomeLink';
import Animation from './Animation';

import Data from '../_assets/ContentData';

const Home = () => {

    return(
        <div id="Home" className="home-box">
            <Animation/>
            <Header/> 
            
            <div className="intro">
                <h2>Wannes Dieltiens</h2>
                <h1>Web3 Developer</h1>
            </div>

            <div id="homelinks" className="home-links-box">
                {
                    Data.map(types => (
                        <HomeLink type={types.type} icon={types.icon}/>
                    ))
                }
            </div>           
        </div>
    )
}

export default Home;