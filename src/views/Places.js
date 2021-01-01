import React, { Component } from 'react'
import PlacesNavBar from '../components/PlacesNavBar/PlacesNavBar'

export class playerCharacters extends Component {
    render() {
        return (
            <>
            <PlacesNavBar />
            <div className='places'> 
                <h1>Places</h1>
            </div>
        </>
        )
    }
}

export default playerCharacters