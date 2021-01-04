import React, { Component } from 'react'
import Collapsible from 'react-collapsible';


import CharSideBar from '../components/CharNavBar/CharNavBar'
import SpellCard from '../components/SpellCard/SpellCard'
import AbilityCard from '../components/AbilityCard/AbilityCard'


import charImage from '../images/Kandis-1.jpg'
import divination from '../images/divination.jpg'
import abjuration from '../images/abjuration.jpg'
import enchantment from '../images/enchantment.jpg'
import evocation from '../images/evocation.png'
import illusion from '../images/illusion.jpg'
import necromancy from '../images/necromancy.png'
import transmutation from '../images/transmutation.jpg'
import conjuration from '../images/conjuration.jpg'

import lifeDomain from '../images/lifeDomain-2.jpg'




import './views.css';

export class Kandis extends Component {
    render() {
        return (
            <div className='kandisBackground'>
            <CharSideBar />
            <div className='playerCharacters'> 
                <div className='Title'>Kandis</div>
            </div>
            <img className='playerImage' src={charImage} />
            <Collapsible trigger="Abilities" triggerClassName='semi-transparent-button-title-light' triggerOpenedClassName='semi-transparent-button-title-light'>
            <ul>
                <li>
                <AbilityCard image={lifeDomain} 
                abilityName="Disciple of Life"
                description="Also starting at 1st level, your Healing Spells are more effective. 
                Whenever you use a spell of 1st level or higher to Restore Hit Points to a creature, 
                the creature regains additional Hit Points equal to 2 + the spell’s level."
            />
                </li>
            <li>
            <AbilityCard image={lifeDomain} 
                abilityName="Channel Divinity: Preserve Life"
                description="Starting at 2nd Level, you can use your Channel Divinity to heal the badly injured.
                As an action, you present your holy Symbol and evoke Healing energy that can restore a number 
                of Hit Points equal to five times your Cleric level.
                Choose any creatures within 30 feet of you, and divide those Hit Points among them.
                 This feature can restore a creature to no more than half of its hit point maximum.
                  You can’t use this feature on an Undead or a Construct."
            />
            </li>
            </ul>
            </Collapsible>

            <Collapsible trigger="Spells" triggerClassName='semi-transparent-button-title-light' triggerOpenedClassName='semi-transparent-button-title-light'>
            <Collapsible trigger="Cantrips" triggerClassName='semi-transparent-button-light' triggerOpenedClassName='semi-transparent--light'>

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
                <SpellCard image={abjuration} 
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
                <SpellCard image={necromancy} 
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
                <SpellCard image={evocation} 
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
            </Collapsible>
            <Collapsible trigger="1st Level Spells" triggerClassName='semi-transparent-button-light' triggerOpenedClassName='semi-transparent-button-light'>
            <ul>
               <li> 
              
                <SpellCard image={evocation} 
                spellName="Healing Word"
                castTime="Casting Time: 1 Bonus Action"
                range="Range: 60 Feet"
                duration="Duration: Instant"
                school="School: Evocation"
                description="A creature of your choice that you can see within range regains Hit Points equal to 1d4 + your 
                Spellcasting Ability modifier. This spell has no Effect on Undead or Constructs. At Higher Levels: When you cast this spell using 
                a spell slot of 2nd Level or higher, the Healing increases by 1d4 for each slot 
                level above 1st. "
            />

                </li>
                <li> 
                <SpellCard image={abjuration} 
                spellName="Shield of Faith"
                castTime="Casting Time: 1 Bonus Action"
                range="Range: 60 Feet"
                duration="Duration: Concentration, Up to 10 min"
                school="School: Abjuration"
                description="A shimmering field appears and surrounds a creature of your choice within range, granting it a +2 bonus to AC for the Duration. "
            />
                </li>
                <li>
                <SpellCard image={abjuration} 
                spellName="Protection from Evil and Good
                "
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Concentration, Up to 10 min"
                school="School: Abjuration"
                description="Until the spell ends, one willing creature you touch is protected against certain types of 
                creatures: aberrations, celestials, elementals, fey, fiends, and undead.
                The protection grants several benefits. Creatures of those types have disadvantage on 
                attack rolls against the target. The target also can’t be charmed, frightened, or possessed by them. 
                If the target is already charmed, frightened, or possessed by such a creature, the target has advantage 
                on any new saving throw against the relevant effect."
            />
                </li>
                <li> 
                <SpellCard image={necromancy} 
                spellName="Inflict Wounds"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Instant"
                school="School: Necromancy"
                description="Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage. 
                When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st."
            />
                </li>

            </ul>
            </Collapsible>
            <Collapsible trigger="2nd Level Spells" triggerClassName='semi-transparent-button-light' triggerOpenedClassName='semi-transparent-button-light'>
            <ul>
                <li>
                <SpellCard image={transmutation} 
                spellName="Inflict Wounds"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Concentration, Up to 1 hour"
                school="School: Transmutation"
                description="You touch a creature and bestow upon it a magical enhancement. Choose one of the following effects; 
                the target gains that effect until the spell ends. Bear’s Endurance. The target has advantage on Constitution checks. 
                It also gains 2d6 temporary hit points, which are lost when the spell ends. Bull’s Strength.
                 The target has advantage on Strength checks, and his or her carrying capacity doubles. Cat’s Grace.
                  The target has advantage on Dexterity checks.
                   It also doesn’t take damage from falling 20 feet or less if it isn’t incapacitated.
                    Eagle’s Splendor. The target has advantage on Charisma checks. Fox’s Cunning.
                     The target has advantage on Intelligence checks. Owl’s Wisdom. The target has advantage on Wisdom checks.
                     When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.
                     "
            />  
                </li>
                <li>
                <SpellCard image={evocation} 
                spellName="Prayer of Healing"
                castTime="Casting Time: 10 minutes"
                range="Range: 30 feet"
                duration="Duration: Instant"
                school="School: Evocation"
                description="Up to six creatures of your choice that you can see within range each regain hit points equal 
                to 2d8 + your spellcasting ability modifier. This spell has no effect on undead or constructs.
                When you cast this spell using a spell slot of 3rd level or higher, the Healing increases by 1d8 for each slot level above 2nd."
            />
                </li>
            </ul>
            </Collapsible>
            </Collapsible>

        </div>
        )
    }
}

export default Kandis