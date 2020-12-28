import React from 'react';
import './Content.scss';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

const Content = ({type, info, work}) => {

    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{info}</h1>
            <section className="view">             
                <Viewlist work={work}/>
                <Viewbox type={type}/>
            </section>
        </div>
    )
}

export default Content;