import React from 'react';
import Data from '../_assets/ContentData.js';

const Viewlist = ({work}) => {;

    return(
        <div className="viewlist">
            
            {
               work.map(item => (
                   <div className="viewlist-item" key={item.id}>{item.title}</div>
               ))
            }
        </div>
    )
}

export default Viewlist;