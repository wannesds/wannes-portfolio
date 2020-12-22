import React from 'react';
import './About.scss';

const About = () => {

    return(
        <div id="about" className="about-box">
            <div className="picture"/>
            <div className="wrapper-about">
                <h3>25 - male - from Belgium</h3>
                <h4>Interests :</h4>
                <ul>
                    <li>web/blockchain dev, DAPP</li>
                    <li>ecology, sustainability, DIY, philosophy</li>
                    <li>politics, decentralization, innovative tech</li>
                    <li>design, art, cats</li>
                </ul>
            </div>
        </div>
    )
}

export default About;