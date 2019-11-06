import React from 'react';
import HeroCard from './HeroCard';
import HeroDetails from './HeroDetails';

const Heroes = [
    {
        rank: 1,
        name: 'All Might',
        type: 'Hero',
        imageUrl: 'images/heros/allmight.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'One For All',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 2,
        name: 'Endeavor',
        type: 'Hero',
        imageUrl: 'images/heros/Endeavor.png',
        gifURL: 'images/heros/endeavorgif.gif',
        quirk: 'Hell Flame',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fist-Jet Burn, ', 'Fist-Hell Spider, ', 'Prominence Burn']
    },
    {
        rank: 3,
        name: 'Hawks',
        type: 'Hero',
        imageUrl: 'images/heros/Hawks.png',
        gifURL: 'images/heros/Hawks.gif',
        quirk: 'Fierce Wings',
        quirkex: 'Fierce Wings is a Mutant-type Quirk that grants Hawks two large, red wings made up of dozens of feathers. Hawks can freely manipulate each individual feather using his mind.',
        abilities: ['Feather Blades, ', 'Enhanced Speed, ', 'Vocal Espionage']
    },
    {
        rank: 4,
        name: 'Best Jeanist',
        type: 'Hero',
        imageUrl: 'images/heros/BestJeanist.png',
        gifURL: 'images/heros/BestJeanist.gif',
        quirk: 'Fiber Master',
        quirkex: ' Best Jeanist can manipulate fibers at will as long as the person is wearing clothes. He can unravel a part of his clothes into fabric strings and can use them to restrain targets.',
        abilities: ['Fiber Manipulation, ', 'Enhanced Durability, ', 'Power Stack']
    },
    {
        rank: 5,
        name: 'EdgeShot',
        type: 'Hero',
        imageUrl: 'images/heros/Edgeshot.png',
        gifURL: 'images/heros/Edgeshot.gif',
        quirk: 'Foldabody',
        quirkex: ' Edgeshot can manipulate the thinness of his body and stretch his limbs. He is able to transform faster than the speed of sound.',
        abilities: ['Thousand Sheet Pierce, ', 'Power Stack']
    },
    {
        rank: 6,
        name: 'Mirko',
        type: 'Hero',
        imageUrl: 'images/heros/Mirko.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Rabbit',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 7,
        name: 'Crust',
        type: 'Hero',
        imageUrl: 'images/heros/crust.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: ' currently unknown',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 8,
        name: 'Kamui Woods',
        type: 'Hero',
        imageUrl: 'images/heros/KamuiWoods.png',
        gifURL: 'images/heros/KamuiWoods.gif',
        quirk: 'Arbor',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 9,
        name: 'Wash',
        type: 'Hero',
        imageUrl: 'images/heros/wash.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Washer',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 10,
        name: 'Yoroi Musha',
        type: 'Hero',
        imageUrl: 'images/heros/YoroiMusha.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'currently unknown',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 11,
        name: 'Ryukyu',
        type: 'Hero',
        imageUrl: 'images/heros/Ryukyu.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Dragon',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 12,
        name: 'Gang Orca',
        type: 'Hero',
        imageUrl: 'images/heros/gangorca.png',
        gifURL: 'images/heros/gangorca.gif',
        quirk: 'Orcinus',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Fiber Manipulation', 'Enhanced Durability', 'Power Stack']
    },
    {
        rank: 13,
        name: 'Mt.Lady',
        type: 'Hero',
        imageUrl: 'images/heros/mtlady.png',
        gifURL: 'images/heros/mtlady.gif',
        quirk: 'Gigantification',
        quirkex: 'Hellflame is an extremely powerful Quirk that gives Enji pyrokinetic abilities.',
        abilities: ['Grow', 'Giant Kick', 'Smush']
    },


];
const Class1a = [
    {
        rank: 1,
        name: 'Shoto Todoroki',
        type: 'Student',
        imageUrl: 'images/heros/todo.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Fire&Ice',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 2,
        name: 'Katsuki Bakugo',
        type: 'Student',
        imageUrl: 'images/heros/kachan.jpg',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Explosion',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 3,
        name: 'Izuku Midoriya',
        type: 'Student',
        imageUrl: 'images/heros/deku.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'One For All',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 4,
        name: 'Tenya Iida',
        type: 'Student',
        imageUrl: 'images/heros/tenya.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Jet Calves',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 5,
        name: 'Tsuyu Asui',
        type: 'Student',
        imageUrl: 'images/heros/tsuyu.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Frog',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 6,
        name: 'Shoto Todoroki',
        type: 'Student',
        imageUrl: 'images/heros/todo.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Fire&Ice',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 7,
        name: 'Katsuki Bakugo',
        type: 'Student',
        imageUrl: 'images/heros/kachan.jpg',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Explosion',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 8,
        name: 'Izuku Midoriya',
        type: 'Student',
        imageUrl: 'images/heros/deku.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'One For All',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 9,
        name: 'Tenya Iida',
        type: 'Student',
        imageUrl: 'images/heros/tenya.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Jet Calves',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 10,
        name: 'Tsuyu Asui',
        type: 'Student',
        imageUrl: 'images/heros/tsuyu.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Frog',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 11,
        name: 'Shoto Todoroki',
        type: 'Student',
        imageUrl: 'images/heros/todo.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Fire&Ice',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 12,
        name: 'Katsuki Bakugo',
        type: 'Student',
        imageUrl: 'images/heros/kachan.jpg',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Explosion',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 13,
        name: 'Izuku Midoriya',
        type: 'Student',
        imageUrl: 'images/heros/deku.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'One For All',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank:14,
        name: 'Tenya Iida',
        type: 'Student',
        imageUrl: 'images/heros/tenya.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Jet Calves',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 15,
        name: 'Tsuyu Asui',
        type: 'Student',
        imageUrl: 'images/heros/tsuyu.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Frog',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 16,
        name: 'Shoto Todoroki',
        type: 'Student',
        imageUrl: 'images/heros/todo.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Fire&Ice',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 17,
        name: 'Katsuki Bakugo',
        type: 'Student',
        imageUrl: 'images/heros/kachan.jpg',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Explosion',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 18,
        name: 'Izuku Midoriya',
        type: 'Student',
        imageUrl: 'images/heros/deku.webp',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'One For All',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 19,
        name: 'Tenya Iida',
        type: 'Student',
        imageUrl: 'images/heros/tenya.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Jet Calves',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
    {
        rank: 20,
        name: 'Tsuyu Asui',
        type: 'Student',
        imageUrl: 'images/heros/tsuyu.png',
        gifURL: 'images/heros/AllMightgif.gif',
        quirk: 'Frog',
        quirkex: 'One For All allows the host to access power from the previous users of the Quirk. It has not been clarified if the Quirk that stockpiles power simply gains more energy as it is passed on.',
        abilities: ['United States Of Smash, ', 'Carolina Smash, ', 'California Smash']
    },
];

const Villans = [
    {
        rank: 1,
        name: 'Shigaraki ',
        type: 'Villan',
        imageUrl: 'images/heros/allforone.png',
        gifURL: 'images/heros/AllForOnegif.webp',
        quirk: 'All For One',
        quirkex: 'All For One\'s Quirk allows him to steal people\'s Quirks and render them his own. He can even combine his stolen Quirks to create novel attacks with devastating effects. This Quirk can also grant stolen Quirks to other people, and forcibly activate the Quirks of others.',
        abilities: ['Air Cannon, ', 'Forced Quirk Activation, ', 'Air Walk']
    },

    {
        rank: 2,
        name: 'OverHaul ',
        type: 'Villan',
        imageUrl: 'images/heros/OverHaul.png',
        gifURL: 'images/heros/OverHaul.gif',
        quirk: 'OverHaul',
        quirkex: 'OverHaul is the ability to disassemble and reassemble anything he touches, effectively giving him full control over matter. He can disassemble people to kill them or reassemble them to heal their wounds.',
        abilities: ['Air Cannon, ', 'Forced Quirk Activation, ', 'Air Walk']
    },
];

export default class HeroCardContainer extends React.Component {


    render() {

        const { ShowHeroDetails, clickedHero, type } = this.props;
        var CharacterArray = [];
        if (type === 'Heroes') {
            CharacterArray = Heroes;
            SortHeroes();
        }
        else if (type === 'Students') {
            CharacterArray = Class1a;
            SortHeroes();
        }
        else if (type === 'Villans') {
            CharacterArray = Villans;
            SortHeroes();
        }
        function SortHeroes(){

            CharacterArray.sort(function(a,b){return a.rank-b.rank})

        }
        return (

            <div>
                {ShowHeroDetails ? <HeroDetails clickedHero{...clickedHero} onToggleOffClick={() => this.props.onToggleOffClick()} /> : null}
                <div class="hero-card-container">
                    {
                        CharacterArray.map(hero => (
                            <HeroCard showState={ShowHeroDetails} onToggleClick={() => this.props.onToggleClick(hero)} hero={hero} key={hero.rank} />
                        ))
                    }
                </div>
            </div>
        );
    }
}