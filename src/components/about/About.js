import React from 'react';
import './About.scss';
import Tilt from 'react-tilt';

const About = () => {

    return(
        <div id="about" className="about-box">
            <Tilt className="Tilt" options={{ max : 25 }}>
                <div className="Tilt-inner picture"/>
            </Tilt>
            <div className="wrapper-about">
                <h3>25 - male - from Belgium</h3>
                <h4>Interests :</h4>
                <ul>
                    <li>web/blockchain dev, DAPP, DAO</li>
                    <li>ecology, sustainability, philosophy</li>
                    <li>DIY, innovative tech</li>
                    <li>design, art, cats</li>
                </ul>
            </div>
        </div>
    )
}

export default About;