import React from 'react';
import './About.scss';
import Tilt from 'react-tilt';

const About = () => {

    return(
        <div id="About" className="about-box">
            <Tilt className="Tilt" options={{ max : 25 }}>
                <div className="Tilt-inner picture"/>
            </Tilt>
            <div className="wrapper-about">
                {/*todo getDate - bday to auto update age */}
                <h3>27 - male - Belgium</h3>
                <h4>Interests :</h4>
                <ul>
                    <li>Web3 Dev ('Blockchains', data-pods, AI)</li>
                    <li>Philosophy, Ecology, Governance, DIY</li>
                    <li>Art & Crafts</li>
                    <li>Cats & Plants</li>
                </ul>
            </div>
        </div>
    )
}

export default About;