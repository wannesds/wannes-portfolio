import React, {useState} from 'react';
import './Content.scss';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

function Content({type, info, work}) {
    const [activeItem, setActiveItem] = useState();

    const activateItem = (id) => {
        work.filter((e) => e.id === [activeItem])
    }
    console.log(activeItem)
    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{info}</h1>
            <section className="view">             
                <Viewlist work={work} callItem={activateItem}/>
                <Viewbox type={type} work={activeItem}/>
            </section>
        </div>
    )
}

export default Content;