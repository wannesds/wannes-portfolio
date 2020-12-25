import React from 'react';

const Viewbox = ({type}) => {
     return(
         <div className="viewbox">
             <p>{type}</p>
             <p>display a work item by getting the data or id from a callback from viewlist.js thru content.js</p>
         </div>
     )
 }

 export default Viewbox;