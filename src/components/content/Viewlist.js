import React from 'react';
import Data from '../_assets/ContentData.js';

const Viewlist = ({work}) => {;

    return(
        <div className="viewlist">
            
            {
               work.map(item => (
                   <div className="viewlist-item" key={item.id}>
                        {item.title} ,
                        <p>click and send callback of correct id or data to viewbox.js</p>
                   </div>
                   
               ))
            }
            
        </div>
    )
}

export default Viewlist;