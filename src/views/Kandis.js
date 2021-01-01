import React, { Component } from 'react'
import CharSideBar from '../components/CharNavBar/CharNavBar'

import charImage from '../images/Kandis-1.jpg'
import './views.css';

export class Kandis extends Component {
    render() {
        return (
            <>
            <CharSideBar />
            <div className='playerCharacters'> 
                <div className='Title'>Kandis</div>
            </div>
            <img className='playerImage' src={charImage} />

        </>
        )
    }
}

export default Kandis