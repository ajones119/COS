import React, { Component } from 'react'
import Collapsible from 'react-collapsible';


import CharSideBar from '../components/CharNavBar/CharNavBar'
import SpellCard from '../components/SpellCard/SpellCard'
import AbilityCard from '../components/AbilityCard/AbilityCard'
import NavBar from "../components/NavBar/NavBar";


import divination from '../images/divination.jpg'
import abjuration from '../images/abjuration.jpg'
import enchantment from '../images/enchantment.jpg'
import evocation from '../images/evocation.png'
import illusion from '../images/illusion.jpg'
import necromancy from '../images/necromancy.png'
import transmutation from '../images/transmutation.jpg'
import conjuration from '../images/conjuration.jpg'

import charImage from '../images/Florence-1-2.png'

import wildFire from '../images/wildFire.jpg'
import woodElf from '../images/woodElf.jpg'
import druid from '../images/druid.jpeg'



import './views.css';

export class Florence extends Component {
    render() {
        return (
            <div className='florenceBackground'>
            <NavBar />
            <CharSideBar />
            <div className='playerCharacters'> 
                <div className='Title'>Florence</div>
            </div>
            <img className='playerImage' src={charImage} />
            <div className='button-group'>
            <Collapsible trigger="Abilities" triggerClassName='semi-transparent-button-title-dark' triggerOpenedClassName='semi-transparent-button-title-dark'>
            <ul>
                <li>
                <AbilityCard image={woodElf} 
                abilityName="Mask of the Wild"
                description="You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, 
                and other natural phenomena."
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
            <li>
            <AbilityCard image={wildFire} 
                abilityName="Summon Wildfire Spirit"
                description="At 2nd level, You can summon the primal spirit bound to your soul. As an action, you can expend one use of your Wild Shape feature 
                to summon your wildfire spirit, rather than assuming a beast form.
                The spirit appears in an unoccupied space of your choice that you can see within 30 feet of you.
                 Each creature within 10 feet of the spirit (other than you) when it appears must succeed on a Dexterity 
                 saving throw against your spell save DC or take 2d6 fire damage."
            />
            </li>
            </ul>
            </Collapsible>

            <Collapsible trigger="Spells" triggerClassName='semi-transparent-button-title-dark' triggerOpenedClassName='semi-transparent-button-title-dark'>
            <Collapsible trigger="Cantrips" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>

            <ul>
                <li>
                <SpellCard image={transmutation} 
                spellName="Mending"
                castTime="Casting Time: 1 Action"
                range="Range: Touch"
                duration="Duration: Instant"
                school="School: Transmutation"
                description="This spell repairs a single break or tear in an object you touch, such as a broken chain link, two halves 
                of a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no larger than 1 foot in any dimension,
                 you mend it, leaving no trace of the former damage.
                This spell can physically repair a magic item or construct, but the spell can’t restore magic to such an object."
            />
                </li>
                <li>
                <SpellCard image={transmutation} 
                spellName="Shillelagh"
                castTime="Casting Time: 1 Bonus Action"
                range="Range: Touch"
                duration="Duration: 1 min"
                school="School: Transmutation"
                description="The wood of a club or quarterstaff you are holding is imbued with nature’s power. For the duration, 
                you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, 
                and the weapon’s damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it 
                again or if you let go of the weapon."
            />
                </li>
            </ul>
            </Collapsible>
            <Collapsible trigger="1st Level Spells" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>
            <ul>
            <li>
                <SpellCard image={enchantment} 
                spellName="Animal Friendship"
                castTime="Casting Time: 1 Action"
                range="Range: 30 Feet"
                duration="Duration: 24 hours"
                school="School: Enchantment"
                description="This spell lets you convince a beast that you mean it no harm. Choose a beast that you can see within range. 
                It must see and hear you. If the beast’s Intelligence is 4 or higher, the spell fails. Otherwise, the beast must succeed on a 
                Wisdom saving throw or be charmed by you for the spell’s duration. If you or one of your companions harms the target, the spells ends.
                 When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional beast for each slot level above 1st."
            />
                </li>
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
                <SpellCard image={transmutation} 
                spellName="Create or Destroy Wayter"
                castTime="Casting Time: 1 Action"
                range="Range: 30 Feet"
                duration="Duration: Instant"
                school="School: Transmutation"
                description="You either create or destroy water. Create Water. You create up to 10 gallons of clean water within range 
                in an open container. Alternatively, the water falls as rain in a 30-foot cube within range, extinguishing exposed flames in 
                the area. Destroy Water. You destroy up to 10 gallons of water in an open container within range. Alternatively, you destroy fog in a 
                30-foot cube within range.
                 When you cast this spell using a spell slot of 2nd level or higher, you create or destroy 
                 10 additional gallons of water, or the size of the cube increases by 5 feet, for each slot level above 1st."
            />
                </li>
 

            </ul>
            </Collapsible>
            <Collapsible trigger="2nd Level Spells" triggerClassName='semi-transparent-button-dark' triggerOpenedClassName='semi-transparent-button-dark'>
            <ul>
                <li>
                <SpellCard image={abjuration} 
                spellName="Aura of Life"
                castTime="Casting Time: 1 Action"
                range="Range: Self (30-foot radius)"
                duration="Duration: Concentration, Up to 10 min"
                school="School: Abjuration"
                description="Life-preserving energy radiates from you in an aura with a 30-foot radius. Until the spell ends, the aura moves with you,
                 centered on you. Each non-hostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum 
                 can’t be reduced. In addition, a non-hostile, living creature regains 1 hit point when it starts its turn in the aura with 0 hit points."
            />  
                </li>
                <li>
                <SpellCard image={evocation} 
                spellName="Flame Blade"
                castTime="Casting Time: 1 Bonus Action"
                range="Range: Self"
                duration="Duration: Concentration, Up to 10 min"
                school="School: Evocation"
                description="You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts
                 for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action. You can use
                  your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage. The flaming blade
                   sheds bright light in a 10-foot radius and dim light for an additional 10 feet.
                   When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
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

export default Florence