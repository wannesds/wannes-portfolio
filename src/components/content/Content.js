import React from 'react';
import './Content.scss';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

const Content = ({type}) => {

    return(
        <div id={type} className="content-box">        
            <h1>{type} related work</h1>
            <Viewbox type={type}/>
            <Viewlist type={type}/>
        </div>
    )
}

export default Content;