import React from 'react';
import './Content_type.scss';

const Content_type = ({type}) => {

    return(
        <div className="content-type-box green center">        
            <a>hello {type}</a>
        </div>
    )
}

export default Content_type;