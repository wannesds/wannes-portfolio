import React from 'react';
import './Viewbox.scss';

const Viewbox = ({type, item}) => {
    //id, title, picture, githublink, demolink, info1, info2
     return(
         <div className="viewbox">
             <p>{item.title}</p>
             <img alt="demo picture" />
         </div>
     )
 }

 export default Viewbox;