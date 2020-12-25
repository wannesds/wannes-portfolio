import React from 'react';
import './Content.scss';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

const Content = ({type, id, info, work}) => {

    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{info}</h1>
            <Viewbox type={type}/>
            <Viewlist work={work}/>
        </div>
    )
}

export default Content;