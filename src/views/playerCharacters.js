import React, { Component } from 'react'
import CharSideBar from '../components/CharNavBar/CharNavBar'
import { Link } from 'react-router-dom';


import sanja from '../images/Ireena-2.png'
import florence from '../images/Florence-1-2.png'
import garyx from '../images/Garyx-1.jpg'
import kandis from '../images/Kandis-1.jpg'
import pctba from '../images/pcTba.png'



export class playerCharacters extends Component {
    render() {
        return (
            <div className='playerCharactersBackground'>
            <CharSideBar />
            <div className='playerCharacters'> 
                <div className='Title'>Player Characters</div>
            </div>
            <div className='cards'>
                <div class='card'>
                    <Link to='/COS/playerCharacters/Kandis' className='semi-transparent-button-title-light'>   
                        <img src={kandis} className='playerThumbnail' />
                        <div className='subTitle'>Kandis</div>
                    </Link>
                </div>
                <div class="card">
                    <Link to='/COS/playerCharacters/Garyx'className='semi-transparent-button-title-light'>      
                        <img src={garyx} className='playerThumbnail' />
                        <div className='subTitle'>Garyx</div>
                    </Link>
                </div> 
                <div class="card">
                    <Link to='/COS/playerCharacters/Florence' className='semi-transparent-button-title-light'>   
                        <img src={florence} className='playerThumbnail' />
                        <div className='subTitle'>Florence</div>
                    </Link>
                </div>  
                <div class="card">
                    <Link to='/COS/playerCharacters/Sanja' className='semi-transparent-button-title-light'>       
                        <img src={sanja} className='playerThumbnail' />
                        <div className='subTitle'>Sanja</div>
                    </Link>
                </div>
                <div class="card semi-transparent-button-title-light">
                    <img src={pctba} className='playerThumbnail' />
                    <div className='subTitle'>TBA</div>
                </div>
            </div>
            
        </div>
        )
    }
}

export default playerCharacters
