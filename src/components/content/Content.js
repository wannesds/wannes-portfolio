import React from 'react';
import Viewbox from './Viewbox';

function Content({type, work,}) {

    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{type}</h1>        
            <section className="content-items">  
                { work.map(items => ( <Viewbox item={items}/> )) }
            </section> 
        </div>
    )
}

export default Content;