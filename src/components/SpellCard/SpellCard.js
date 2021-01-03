import React from 'react';

import './SpellCard.css';
import {IconContext} from 'react-icons';

class SpellCard extends React.Component {
    render() {
        return (
            <div className='container'>
                <img className='spellCard' src={this.props.image} />
                <div class='spellText'>
                    <h4 className='spellTitle'>{this.props.spellName}</h4>
                    <p>{this.props.castTime}</p>
                    <p>{this.props.range}</p>
                    <p>{this.props.duration}</p>
                    <p>{this.props.school}</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
};

export default SpellCard;