import React from 'react';
import './Contact.scss'
import {ReactComponent as LinkedinSVG} from '../_assets/linkedin.svg';
import {ReactComponent as TelegramSVG} from '../_assets/telegram.svg';
import {ReactComponent as DeviantartSVG} from '../_assets/deviantart.svg';
import {ReactComponent as GithubSVG} from '../_assets/github.svg';
import {ReactComponent as RedditSVG} from '../_assets/reddit.svg';
import {ReactComponent as MailSVG} from '../_assets/mail.svg';

const Contact = () => {

    const copyMail = () => {
        navigator.clipboard.writeText('wannesdieltiens@gmail.com');
        alert("wannesdieltiens@gmail.com copied to clipboard!");
    }

    return(
        <div id="Contact" className="contact-box"> 
            {/* import svg's and make em links: LinkedIn, Voice, Telegram, DeviantArt, Email, reddit */} 
            <a onClick={() => copyMail()}><MailSVG className="socialmedia-svg"/></a>
            <a href="https://www.linkedin.com/in/wannes-dieltiens/"><LinkedinSVG className="socialmedia-svg"/></a>
            <a href="tg://resolve?domain=wannesds"><TelegramSVG className="socialmedia-svg"/></a>
            <a href="https://www.deviantart.com/s0dizzy"><DeviantartSVG className="socialmedia-svg"/></a>
            <a href="https://www.reddit.com/user/wannesds"><RedditSVG className="socialmedia-svg"/></a>
            <a href="https://www.github.com/wannesds"><GithubSVG className="socialmedia-svg"/></a>
           
        </div>
    )
}

export default Contact;