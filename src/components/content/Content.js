import React from 'react';
import './Content.scss';
import Content_type from './Content_type';

const Content = () => {

    return(
        <div className="content-box">        
            <Content_type type="code"/>
            <Content_type type="design"/>
            <Content_type type="art"/>
            {
                
            }
        </div>
    )
}

export default Content;