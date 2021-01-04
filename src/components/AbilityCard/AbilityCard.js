import React from 'react';

import './AbilityCard.css';
import {IconContext} from 'react-icons';

class AbilityCard extends React.Component {
    render() {
        return (
            <div className='container'>
                <img className='abilityCard' src={this.props.image} />
                <div class='abilityText'>
                    <h4 className='abilityTitle'>{this.props.abilityName}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
};

export default AbilityCard;