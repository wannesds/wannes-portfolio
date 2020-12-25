import React from 'react';
import './Content.scss';
import Content from './Content';
import Data from '../_assets/ContentData';

const ContentContainer = () => {

    return(
        <div className="content-container">        
            {
                Data.map(types => (
                    <Content
                        id={types.id}
                        type={types.type}
                        info={types.info}
                        work={types.work}
                    />
                ))
            }
        </div>
    )
}

export default ContentContainer;