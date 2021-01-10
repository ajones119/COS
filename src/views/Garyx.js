import React, { Component } from 'react'
import Collapsible from 'react-collapsible';


import CharSideBar from '../components/CharNavBar/CharNavBar'
import SpellCard from '../components/SpellCard/SpellCard'
import AbilityCard from '../components/AbilityCard/AbilityCard'
import PCStatCardDark from '../components/PCStatCardDark/PCStatCardDark'
import NavBar from "../components/NavBar/NavBar";


import charImage from '../images/Garyx-1.jpg'
import divination from '../images/divination.jpg'
import abjuration from '../images/abjuration.jpg'
import enchantment from '../images/enchantment.jpg'
import evocation from '../images/evocation.png'
import illusion from '../images/illusion.jpg'
import necromancy from '../images/necromancy.png'
import transmutation from '../images/transmutation.jpg'
import conjuration from '../images/conjuration.jpg'


import minotaur2 from '../images/minotaur-2.jpg'
import minotaur from '../images/minotaur.jpg'
import swamp from '../images/swamp.jpg'
import druid from '../images/druid.jpeg'



import './views.css';

export class Garyx extends Component {
    render() {
        return (

            <div className='garyxBackground'>
            <NavBar />
            <CharSideBar />
            <div className='lg-pc-hdr'>
                    <div className='cards-pc'>
                        <div className='card-pc'>
                            <PCStatCardDark Race='Minotaur'
                            Class='Circle of Land Druid (Swamp)'
                            Level='3'
                            STR='14' STRMOD='+2'
                            DEX='10' DEXMOD='0'
                            CON='14' CONMOD='+2'
                            INT='10' INTMOD='0'
                            WIS='16' WISMOD='+3'
                            CHA='14' CHAMOD='+2' />
                        </div>

                        <div className='card-pc'>
                            <div className='playerCharacters'>
                                <div className='Title-wheat'>Garyx</div>
                            </div>
                            <img className='playerImage' src={charImage} />
                        </div>

                        <div className='card-pc'>
                            <div className='desc-box'>
                                Here is some character backstory
                            </div>
                        </div>
                    </div>
                </div>

                <div className='md-pc-hdr'>                
                        <div className='card-pc'>
                            <div className='playerCharacters'>
                                <div className='Title-wheat'>Garyx</div>
                            </div>
                            <img className='playerImage' src={charImage} />
                        </div>

                        <div className='card-pc'>
                            <PCStatCardDark Race='Minotaur'
                            Class='Circle of Land Druid (Swamp)'
                            Level='3'
                            STR='14' STRMOD='+2'
                            DEX='10' DEXMOD='0'
                            CON='14' CONMOD='+2'
                            INT='10' INTMOD='0'
                            WIS='16' WISMOD='+3'
                            CHA='14' CHAMOD='+2' />
                        </div>
                </div>

            <div className='button-group'>

            <Collapsible trigger="Abilities" triggerClassName='semi-transparent-button-title-dark' triggerOpenedClassName='semi-transparent-button-title-dark'>
            <ul>
                <li>
                <AbilityCard image={minotaur2} 
                abilityName="Hammering Horns"
                description="Immediately after you hit a creature with a melee attack as part of the Attack action on your turn,
                 you can use a bonus action to attempt to shove that target with your horns. The target must be no more than one 
                 size larger than you and within 5 feet of you. Unless it succeeds on a Strength saving throw against a DC equal to 
                 8 + your proficiency bonus+ your Strength modifier, you push it up to 10 feet away from you"
            />
                </li>
            <li>
            <AbilityCard image={minotaur} 
                abilityName="Goring Rush"
                description="Immediately after you use the Dash action on your turn and move at least 20 feet,
                 you can make one melee attack with your horns as a bonus action."
            />
            </li>
            <li>
            <AbilityCard image={swamp} 
                abilityName="Natural Recovery"
                description="Starting at 2nd level, you can regain some of your magical energy by sitting in 
                meditation and communing with nature. During a short rest, you choose expended spell slots to recover. 
                The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), 
                and none of the slots can be 6th level or higher. You can’t use this feature again until you finish a long rest.
                For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. 
                You can recover either a 2nd-level slot or two 1st-level slots."
            />
            </li>
            <li>
            <AbilityCard image={druid} 
                abilityName="Wild Shape"
                description="Starting at 2nd Level, you can use your action to magically assume 
                the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or Long Rest.
                Your druid level determines the Beasts you can transform into, as shown in the Beast 
                Shapes table. At 2nd Level, for example, you can transform into any beast that has a Challenge Rating of 1/4 or lower 
                that doesn't have a flying or Swimming speed."
            />
            </li>
            </ul>
            </Collapsible>

            <Collapsible trigger="Spells" triggerClassName='semi-transparent-button-title-dark' triggerOpenedClassName='semi-transparent-button-title-dark'>
            <Collapsible trigger="Cantrips" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>

            <ul>
                <li>
                <SpellCard image={conjuration} 
                spellName="Produce Flame"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: 10 min"
                school="School: Conjuration"
                description="A flickering flame appears in your hand. The flame remains there for the duration and harms neither 
                you nor your equipment. The flame sheds bright light in a 10-foot radius and dim light for an additional 10 feet. 
                The spell ends if you dismiss it as an action or if you cast it again.
                You can also attack with the flame, although doing so ends the spell. 
                When you cast this spell, or as an action on a later turn, you can hurl the flame at a creature within 30 feet of you.
                 Make a ranged spell attack. On a hit, the target takes 1d8 fire damage."
            />
                </li>
                <li>
                <SpellCard image={conjuration} 
                spellName="Poison Spray"
                castTime="Casting Time: 1 Action"
                range="Range: 10 Feet"
                duration="Duration: Instant"
                school="School: Conjuration"
                description="You extend your hand toward a creature you can see within range and project a puff of noxious gas from your palm. 
                The creature must succeed on a Constitution saving throw or take 1d12 poison damage."
            />
                </li>
            </ul>
            </Collapsible>

            <Collapsible trigger="1st Level Spells" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>
            <ul>
               <li> 
              
                <SpellCard image={transmutation} 
                spellName="Goodberry"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Instant"
                school="School: Transmutation"
                description="Up to ten berries appear in your hand and are infused with magic for the duration.
                 A creature can use its action to eat one berry. Eating a berry restores 1 hit point, and the berry 
                 provides enough nourishment to sustain a creature for one day.
                 The berries lose their potency if they have not been consumed within 24 hours of the casting of this spell. "
            />

                </li>
                <li> 
                <SpellCard image={divination} 
                spellName="Detect Magic"
                castTime="Casting Time: 1 Action"
                range="Range: Self"
                duration="Duration: Concentration, Up to 10 min"
                school="School: Divination"
                description="For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, 
                you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you 
                learn its school of magic, if any. The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 
                1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt"
            />
                </li>
                <li>
                <SpellCard image={enchantment} 
                spellName="Charm Person"
                castTime="Casting Time: 1 Action"
                range="Range: 30 Feet"
                duration="Duration: 1 hour"
                school="School: Enchantment"
                description="You attempt to charm a humanoid you can see within range. It must make a Wisdom saving throw, 
                and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you 
                until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly 
                acquaintance. When the spell ends, the creature knows it was charmed by you.
                When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. 
                The creatures must be within 30 feet of each other when you target them."
            />
                </li>
                <li> 
                <SpellCard image={evocation} 
                spellName="Thunderwave"
                castTime="Casting Time: 1 Action"
                range="Range: Self (15-foot Cube)"
                duration="Duration: Instant"
                school="School: Evocation"
                description="A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a 
                Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful 
                save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of 
                effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet.
                When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
            />
                </li>
            </ul>
            </Collapsible>

            <Collapsible trigger="2nd Level Spells" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>
            <ul>
                <li>
                <SpellCard image={evocation} 
                spellName="Moonbeam"
                castTime="Casting Time: 1 Action"
                range="Range: 120 Feet"
                duration="Duration: Concentration, Up to 1 min"
                school="School: Evocation"
                description="A silvery beam of pale light shines down in a 5-foot-radius, 40-foot-high cylinder centered on a point within range. Until the spell ends, dim light fills the cylinder.
                When a creature enters the spell’s area for the first time on a turn or starts its turn there, it is engulfed in ghostly flames that cause searing pain, and it must make a Constitution saving throw. It takes 2d10 radiant damage on a failed save, or half as much damage on a successful one.
                A shapechanger makes its saving throw with disadvantage. If it fails, it also instantly reverts to its original form and can’t assume a different form until it leaves the spell’s light.
                On each of your turns after you cast this spell, you can use an action to move the beam 60 feet in any direction.
                 When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd."
            />  
                </li>
                <li>
                <SpellCard image={transmutation} 
                spellName="Heat Metal"
                castTime="Casting Time: 1 Action"
                range="Range: 60 feet"
                duration="Duration: Concentration, Up to 1 min"
                school="School: Transmutation"
                description="Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, 
                that you can see within range. You cause the object to glow red-hot. Any creature in physical contact with the object takes 
                2d8 fire damage when you cast the spell. Until the spell ends, you can use a bonus action on each of your subsequent turns to 
                cause this damage again. If a creature is holding or wearing the object and takes the damage from it, the creature must succeed 
                on a Constitution saving throw or drop the object if it can. If it doesn’t drop the object, it has disadvantage on attack rolls and 
                ability checks until the start of your next turn.
                 When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot above 2nd."
            />
                </li>
                <li>
                <SpellCard image={evocation} 
                spellName="Melf’s Acid Arrow"
                castTime="Casting Time: 1 Action"
                range="Range: 90 feet"
                duration="Duration: Instant"
                school="School: Evocation"
                description="A shimmering green arrow streaks toward a target within range and bursts in a spray of acid.
                Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 
                2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the 
                initial damage and no damage at the end of its next turn. When you cast this spell using a spell slot of 3rd level or higher, 
                the damage (both initial and later) 
                increases by 1d4 for each slot level above 2nd."
            />
                </li>
            </ul>
            </Collapsible>
            </Collapsible>
            </div>
        </div>
        )
    }
}

export default Garyx