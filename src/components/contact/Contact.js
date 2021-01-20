import React from 'react';
import './Contact.scss'
import {ReactComponent as LinkedinSVG} from '../_assets/linkedin.svg';
import {ReactComponent as TelegramSVG} from '../_assets/telegram.svg';
import {ReactComponent as DeviantartSVG} from '../_assets/telegram.svg';
import {ReactComponent as InstagramSVG} from '../_assets/telegram.svg';
import {ReactComponent as RedditSVG} from '../_assets/telegram.svg';
import {ReactComponent as MailSVG} from '../_assets/telegram.svg';

const Contact = () => {

    return(
        <div id="Contact" className="contact-box"> 
            {/* import svg's and make em links: LinkedIn, Voice, Telegram, DeviantArt, Email, reddit */} 
            <a href="putmyemailhere"><MailSVG className="socialmedia-svg"/></a>
            <a href="https://www.linkedin.com/in/wannes-dieltiens/"><LinkedinSVG className="socialmedia-svg"/></a>
            <a href="telegramlink"><TelegramSVG className="socialmedia-svg"/></a>
            <a href="https://www.deviantart.com/s0dizzy"><DeviantartSVG className="socialmedia-svg"/></a>
            <a href="redditlink"><RedditSVG className="socialmedia-svg"/></a>
            <a href="instagramlink"><InstagramSVG className="socialmedia-svg"/></a>
           
        </div>
    )
}

export default Contact;