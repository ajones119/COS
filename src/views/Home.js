import React from 'react'
import './views.css';

import COS from '../images/COS-1.jpg';

export default function Home() {

   const titleText= 'Curse Of Strahd:\nA Tuesday Night D&D Group';

    return (
        <div className='homeBackground'>
            <div className='home'>
            
               <div className='Title'>{titleText}</div>
                
            </div>
        </div>
    )
}
