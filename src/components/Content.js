import React from 'react';
import './Content.scss';
import Content_type from './Content_type';

const Content = () => {

    return(
        <div className="content-box">        
            <Content_type type="Code"/>
            <Content_type type="Design"/>
            <Content_type type="Art"/>
        </div>
    )
}

export default Content;