import React, {useState} from 'react';
import Data from '../_assets/ContentData';
import Viewbox from './Viewbox';
import Viewlist from './Viewlist';

function Content({type, info, work, viewer}) {
    const [activeItem, setActiveItem] = useState(work[0]);

    console.log(activeItem)
    return(
        <div id={type} className="content-box">        
            <h1 className="type-title">{type}</h1>
            { 
            //!viewer ? //if viewer false then show all items
                <section className="noview">  
                    { work.map(items => (
                        <Viewbox item={items}/>
                    )) }
                </section> 
            //:
                // <section className="view">             
                //     <Viewlist work={work} callItem={(item) => setActiveItem(item)}/>
                //     <Viewbox item={activeItem}/>
                // </section>
            }
        </div>
    )
}

export default Content;