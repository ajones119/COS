import React, { Component } from 'react'
import CharSideBar from '../components/CharNavBar/CharNavBar'

export class playerCharacters extends Component {
    render() {
        return (
            <>
            <CharSideBar />
            <div className='playerCharacters'> 
                <h1>PCS</h1>
            </div>
        </>
        )
    }
}

export default playerCharacters
