import React from 'react';
import './Viewbox.scss';

const Viewbox = ({type, item}) => {
    //could change view github link to github svg maybe
     return(
         <div className="viewbox">   
             <div className="item-section">
                <p className="item-title">{item.title}</p>
             </div>
             <div className="item-section">
                <p className="item-info">{item.info1}</p>
                <p className="item-info">{item.info2}</p>
             </div>
             <div className="item-section">
                <div className="item-img"/>

                 <p className="item-links">
                     <a href={item.demoLink}>View Website</a>
                     <a href={item.githubLink}>View Github</a>
                 </p>
             </div>           
         </div>
     )
 }

 export default Viewbox;