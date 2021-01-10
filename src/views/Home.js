import React from 'react'

import NavBar from "../components/NavBar/NavBar";


import './views.css';

import COS from '../images/COS-1.jpg';

export default function Home() {

   const titleText= 'Curse Of Strahd:\nA Tuesday Night D&D Group';

    return (
        <div className='homeBackground'>
            <NavBar />
            <div className='home'>
            
               <div className='Title'>{titleText}</div>
                
            </div>
        </div>
    )
}
