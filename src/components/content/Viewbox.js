import React from 'react';
import './Viewbox.scss';
import Tilt from 'react-tilt';

const Viewbox = ({item}) => {
    //could change view github link to github svg maybe
     return(
         <div className="viewbox">   
             <div className="item-section item-info">

                <h1>{item.title}</h1>
                { !item.info1 ? null : <p>{item.info1}</p> }
                { !item.info2 ? null : <p>{item.info2}</p> }
                { !item.info3 ? null : <p>{item.info3}</p> }

             </div>
             <div className="item-section item-links"> 

                <p>
                    { !item.demoLink ? null : <a href={item.demoLink}>Live Demo</a> }
                    { !item.blogLink ? null : <a href={item.blogLink}>Blog post</a> }
                    { !item.githubLink ? null : <a href={item.githubLink}>Github</a> }
                    { !item.deviantLink ? null : <a href={item.deviantLink}>DeviantArt</a> }                  
                </p>

                <div className="items-section item-img"> 
                    <Tilt className="Tilt" options={{ max : 25, scale : 1 }}>
                        <div className="Tilt-inner">
                            { !item.picture ? null : <img src={process.env.PUBLIC_URL + `/images/${item.picture}`}></img> }
                        </div>
                    </Tilt>
                </div>

             </div>           
         </div>
     )
 }

 export default Viewbox;