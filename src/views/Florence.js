import React, { Component } from 'react'
import CharSideBar from '../components/CharNavBar/CharNavBar'

import charImage from '../images/Florence-1.png'
import './views.css';

export class Florence extends Component {
    render() {
        return (
            <>
            <CharSideBar />
            <div className='playerCharacters'> 
                <div className='Title'>Florence</div>
            </div>
            <img className='playerImage' src={charImage} />

        </>
        )
    }
}

export default Florence