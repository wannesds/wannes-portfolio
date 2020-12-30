import React from 'react';
import Data from '../_assets/ContentData.js';

const Viewlist = ({work, callItem}) => {;

    return(
        <div className="viewlist">          
            {
               work.map(item => (
                   <div className="viewlist-item" key={item.id} onClick={() => {callItem(item)}}>
                        {item.title}
                   </div>
                   
               ))
            }
            
        </div>
    )
}

export default Viewlist;