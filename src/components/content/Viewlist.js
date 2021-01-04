import React from 'react';
import './Viewlist.scss';
import ViewlistButton from './ViewlistButton';

const Viewlist = ({work, callItem}) => {;

    return(
        <div className="viewlist">
            <ViewlistButton action="prev"/>
                              
            <div className="viewlist-box">
                {
                work.map(item => (
                    <div className="viewlist-item" key={item.id} onClick={() => {callItem(item)}}>
                            {item.title}
                    </div>                  
                ))
                }
            </div>
            
            <ViewlistButton action="next"/> 
        </div>    
    )
}

export default Viewlist;