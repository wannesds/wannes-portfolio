import React, {useState} from 'react';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

function Content({type, info, work}) {
    const [activeItem, setActiveItem] = useState(work[0]);

    console.log(activeItem)
    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{info}</h1>
            <section className="view">             
                <Viewlist work={work} callItem={(item) => setActiveItem(item)}/>
                <Viewbox type={type} item={activeItem}/>
            </section>
        </div>
    )
}

export default Content;