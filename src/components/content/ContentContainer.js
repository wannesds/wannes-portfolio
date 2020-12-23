import React from 'react';
import './Content.scss';
import Content from './Content';

const ContentContainer = () => {

    const types=["code", "design", "art"];

    return(
        <div className="content-container">        
            {
                types.map(type => (
                    <Content type={type}/>
                ))
            }
        </div>
    )
}

export default ContentContainer;