import React from 'react';
// import Data from '../_assets/ContentData.js';

const Viewlist = ({type}) => {
    // const typeData = Data.
    return(
        <div className="viewlist">
            <p>view items of {type}</p>
            {/* {
               Data.map((Data, key) => 
                   <p key={Data.id}>{Data.title}</p>
               )
            } */}
            
        </div>
    )
}

export default Viewlist;