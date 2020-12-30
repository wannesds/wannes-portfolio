import React from 'react';
import Data from '../_assets/ContentData.js';

const Viewlist = ({work, callItem}) => {;

    return(
        <div className="viewlist">          
            {
               work.map(item => (
                   <button className="viewlist-item" key={item.id} onClick={callItem(item.id)}>
                        {item.title}
                   </button>
                   
               ))
            }
            
        </div>
    )
}

export default Viewlist;