import React, { Component } from 'react'
import CharSideBar from '../components/CharNavBar/CharNavBar'
import SpellCard from '../components/SpellCard/SpellCard'


import charImage from '../images/Kandis-1.jpg'
import divination from '../images/divination.jpg'

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

            <div className='Title'>Spells</div>
            <div className='subTitle'>Cantrips</div>

            

            <ul>
                <li>
                <SpellCard image={divination} 
                spellName="Guidence"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: 1 min"
                school="School: Divination"
                description="You touch one willing creature. Once before the spell ends, the target can roll a d4 
                and add the number rolled to one ability check of its choice. It can roll the die before 
                or after making the ability check. The spell then ends."
            />
                </li>
                <li>
                <SpellCard image={divination} 
                spellName="Resistance"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Concentration, Up to 1 min"
                school="School: Abjuration"
                description="You touch one willing creature. Once before the spell ends, the target can roll a d4 and 
                add the number rolled to one saving throw of its choice. 
                It can roll the die before or after making the saving throw. The spell then ends."
            />
                </li>
                <li>
                <SpellCard image={divination} 
                spellName="Spare the Dying"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Instant"
                school="School: Necromancy"
                description="You touch a living creature that has 0 Hit Points. The creature becomes stable. 
                This spell has no Effect on Undead or Constructs."
            />
                </li>
                <li>
                <SpellCard image={divination} 
                spellName="Light"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: 1 hour"
                school="School: Evocation"
                description="You touch one object that is no larger than 10 feet in any dimension. Until the spell ends, 
                the object sheds bright light in a 20-foot radius and dim light for an additional 20 feet. 
                The light can be colored as you like. Completely covering the object with something opaque blocks the light. 
                The spell ends if you cast it again or dismiss it as an action.
                If you target an object held or worn by a hostile creature, that creature must succeed 
                on a Dexterity saving throw to avoid the spell."
            />
                </li>
            </ul>
            <div className='subTitle'>1st Level Spells</div>
            <ul>
               <li> 

                   
                    <h4>Healing Word</h4> 
                     Casting Time: 1 Bonus Action
                    <p>Range: 60 Feet</p>
                    <p>Duration: Instant</p>
                    <p>School: Evocation</p>
                    <p>"A creature of your choice that you can see within range regains Hit Points equal to 1d4 + your 
                        Spellcasting Ability modifier. This spell has no Effect on Undead or Constructs."</p>
                    <p>"At Higher Levels: When you cast this spell using a spell slot of 2nd Level or higher, the Healing increases by 1d4 for each slot 
                        level above 1st."</p>
                </li>
                <li> 
                    <h4>Shield of Faith</h4> 
                     Casting Time: 1 Bonus Action
                    <p>Range: 60 Feet</p>
                    <p>Duration: Concentration, Up to 10 min</p>
                    <p>School: Abjuration</p>
                    <p>"A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the Duration."</p>

                </li>
            </ul>

        </>
        )
    }
}

export default Kandis