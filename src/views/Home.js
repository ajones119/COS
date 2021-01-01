import React from 'react'
import './views.css';

import COS from '../images/COS-1.jpg';

export default function Home() {

   const titleText= 'Curse Of Strahd:\nA tuesday Night D&D Group';

    return (
        <div>
            <div className='home'>
            
               <div className='Title'>{titleText}</div>
           
            </div>
        </div>
    )
}
