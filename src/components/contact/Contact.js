import React from 'react';
import './Contact.scss'
import {ReactComponent as LinkedinSVG} from '../_assets/linkedin.svg';

const Contact = () => {

    return(
        <div id="Contact" className="contact-box"> 
            {/* import svg's and make em links: LinkedIn, Voice, Telegram, DeviantArt, Email, reddit */} 
            <a href="https://www.linkedin.com/in/wannes-dieltiens/"><LinkedinSVG className="socialmedia-svg"/></a>
             
        </div>
    )
}

export default Contact;