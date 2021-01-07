import React from 'react';
import './Viewlist.scss';
import ViewlistButton from './ViewlistButton';
//import { url } from 'inspector';

const Viewlist = ({work, callItem}) => {;

    return(
        <div className="viewlist">
            {/* <ViewlistButton action="prev"/> */}
                              
            <div className="viewlist-box">
                {
                work.map(item => (
                    <div>
                        <img 
                            className="viewlist-item" 
                            key={item.id} 
                            src={process.env.PUBLIC_URL + "/images/rick-and-morty.png"} 
                            onClick={() => {callItem(item)}}
                        /> 
                    </div>            
                ))
                }
            </div>
            
            {/* <ViewlistButton action="next"/>  */}
        </div>    
    )
}

export default Viewlist;