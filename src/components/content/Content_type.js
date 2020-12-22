import React from 'react';
import './Content_type.scss';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

const Content_type = ({type}) => {

    return(
        <div id={type} className="content-type-box green center">        
            <h1>{type} related work</h1>
            <Viewbox type={type}/>
            <Viewlist type={type}/>
        </div>
    )
}

export default Content_type;