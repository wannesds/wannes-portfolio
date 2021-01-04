import React from 'react';
import './Viewbox.scss';

const Viewbox = ({type, item}) => {
     return(
         <div className="viewbox">
             <p>{item.title}</p>
         </div>
     )
 }

 export default Viewbox;