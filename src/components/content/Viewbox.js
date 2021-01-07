import React from 'react';
import './Viewbox.scss';

const Viewbox = ({type, item}) => {
    //could change view github link to github svg maybe
     return(
         <div className="viewbox">   
             <div className="item-section item-title">
                <h1>{item.title}</h1>
             </div>
             <div className="item-section item-info">
                <p>{item.info1}</p>
                <p>{item.info2}</p>
             </div>
             <div className="item-section item-img item-links">
                <div/>
                 <p>
                     <a href={item.demoLink}>View Website</a>
                     <a href={item.githubLink}>View Github</a>
                 </p>
             </div>           
         </div>
     )
 }

 export default Viewbox;