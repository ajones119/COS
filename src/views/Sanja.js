import React, { Component } from 'react'
import Collapsible from 'react-collapsible';

import CharSideBar from '../components/CharNavBar/CharNavBar'
import SpellCard from '../components/SpellCard/SpellCard'
import AbilityCard from '../components/AbilityCard/AbilityCard'
import PCStatCard from '../components/PCStatCard/PCStatCard'
import NavBar from "../components/NavBar/NavBar";



import divination from '../images/divination.jpg'
import abjuration from '../images/abjuration.jpg'
import enchantment from '../images/enchantment.jpg'
import evocation from '../images/evocation.png'
import illusion from '../images/illusion.jpg'
import necromancy from '../images/necromancy.png'
import transmutation from '../images/transmutation.jpg'
import conjuration from '../images/conjuration.jpg'

import charImage from '../images/Ireena-2.png'

import fighter from '../images/fighter.png'
import psiWarrior from '../images/psiWarrior.png'
import psiWarrior2 from '../images/psiWarrior-3.jpg'



import './views.css';

export class Sanja extends Component {
    render() {
        return (
            <div className='sanjaBackground'>
                <NavBar />
                <CharSideBar />
                <div className='lg-pc-hdr'>
                    <div className='cards-pc'>
                        <div className='card-pc'>
                            <PCStatCard Race='Human'
                                Class='Psi-Warrior'
                                Level='3'
                                STR='13' STRMOD='+1'
                                DEX='15' DEXMOD='+2'
                                CON='12' CONMOD='+1'
                                INT='18' INTMOD='+4'
                                WIS='10' WISMOD='0'
                                CHA='12' CHAMOD='+1' />
                        </div>

                        <div className='card-pc'>
                            <div className='playerCharacters'>
                                <div className='Title-white'>Sanja</div>
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
                            <div className='Title-white'>Sanja</div>
                        </div>
                        <img className='playerImage' src={charImage} />
                    </div>

                    <div className='card-pc'>
                        <PCStatCard Race='Human'
                            Class='Psi-Warrior'
                            Level='3'
                            STR='13' STRMOD='+1'
                            DEX='15' DEXMOD='+2'
                            CON='12' CONMOD='+1'
                            INT='18' INTMOD='+4'
                            WIS='10' WISMOD='0'
                            CHA='12' CHAMOD='+1' />
                    </div>
                </div>
                <div className='button-group'>

                    <Collapsible trigger="Abilities" triggerClassName='semi-transparent-button-title-light' triggerOpenedClassName='semi-transparent-button-title-light'>
                        <ul>
                            <li>
                                <AbilityCard image={fighter}
                                    abilityName="Defense"
                                    description="While you are wearing armor, you gain a +1 bonus to AC."
                                />
                            </li>
                            <li>
                                <AbilityCard image={fighter}
                                    abilityName="Second Wind"
                                    description="You have a limited well of stamina that you can draw on to protect yourself from harm. 
                On Your Turn, you can use a Bonus Action to regain Hit Points equal to 1d10 + your Fighter level.
                Once you use this feature, you must finish a short or Long Rest before you can use it again."
                                />
                            </li>
                            <li>
                                <AbilityCard image={fighter}
                                    abilityName="Action Surge"
                                    description="Starting at 2nd Level, you can push yourself beyond your normal limits for a moment. On Your Turn, you can take one additional 
                action on top of your regular action and a possible Bonus Action.
                Once you use this feature, you must finish a short or Long Rest before you can use it again. Starting at 17th level, you can use 
                it twice before a rest, but only once on the same turn."
                                />
                            </li>
                        </ul>
                        <div className='Title'>Psionic Power</div>
                        <ul>
                            <li>
                                <AbilityCard image={psiWarrior2}
                                    abilityName="Psionic Power"
                                    description="At 3rd level, you harbor a wellspring of psionic energy within yourself. This energy is
                 represented by your Psionic Energy dice, which are each a d6. You have a number of these dice equal to twice your proficiency bonus, 
                 and they fuel various psionic powers you have, which are detailed below.
                Some of your powers expend the Psionic Energy die they use, as specified in a power's description, and you can't use a power if it 
                requires you to use a die when your dice are all expended. You regain all your expended Psionic Energy dice when you finish a long rest. 
                In addition, as a bonus action, you can regain one expended Psionic Energy die, but you can't do so again until you finish a short or long rest.               
                When you reach certain levels in this class, the size of your Psionic Energy dice increases: at 5th level (d8), 11th level (d10), and 
                17th level (d12).               
                The powers below use your Psionic Energy dice"
                                />
                            </li>
                            <li>
                                <AbilityCard image={psiWarrior}
                                    abilityName="Protective Field"
                                    description="When you or another creature you can see within 30 feet of you takes damage, you can use your reaction
                 to expend one Psionic Energy die, roll the die, and reduce the damage taken by the number rolled plus your Intelligence 
                 modifier (minimum reduction of 1), as you create a momentary shield of telekinetic force."
                                />
                            </li>
                            <li>
                                <AbilityCard image={psiWarrior}
                                    abilityName="Psionic Strike"
                                    description="You can propel your weapons with psionic force. Once on each of your turns, immediately after you hit a target within 
                30 feet of you with an attack and deal damage to it with a weapon, you can expend one Psionic Energy die, rolling it and dealing 
                force damage to the target equal to the number rolled plus your Intelligence modifier."
                                />
                            </li>
                            <li>
                                <AbilityCard image={psiWarrior}
                                    abilityName="Telekinetic Movement"
                                    description="You can move an object or a creature with your mind. As an action, you target one loose object that is Large or
                 smaller or one willing creature, other than yourself. If you can see the target and it is within 30 feet of you, you can move
                  it up to 30 feet to an unoccupied space you can see. Alternatively, if it is a Tiny object, you can move it to or from your hand.
                   Either way, you can move the target horizontally, vertically, or both. Once you take this action, you can't do so again until you 
                   finish a short or long rest, unless you expend a Psionic Energy die to take it again."
                                />
                            </li>
                        </ul>
                    </Collapsible>
                </div>


            </div>
        )
    }
}

export default Sanja