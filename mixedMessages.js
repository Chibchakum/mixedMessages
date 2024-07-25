/*Declare all of the choices for the three variables
const pokemon = ['Pikachu', 'Bulbasaur', 'Squirtle', 'Charmander', 'Eevee'];
const attack = ['thunder shock', 'vine whip', 'water gun', 'ember', 'takedown'];
const damage = ['10 HP of damage, not very effective', '20 HP of damage', '40 HP of damage, super effective!'];
*/

function mixedMessages() {
//Create objects for the pokemon
    let choosePokemon = {
        team: {
        choice1: {
            pokemon: 'Pikachu',
            attack: 'thunder shock',
            type: 'electric',
        },
        choice2: {
            pokemon: 'Bulbasaur',
            attack: 'vine whip',
            type: 'grass',
        },
        choice3: {
            pokemon: 'Squirtle',
            attack: 'water gun',
            type: 'water',
        },
        choice4: {
            pokemon: 'Charmander',
            attack: 'ember',
            type: 'fire',
        },
        choice5: {
            pokemon: 'Sandshrew',
            attack: 'dig',
            type: 'ground',
        },
        }
    };

    //Create a function that keys the objects above, assigns them a random index and choose one
    function getRandomPokemon(team) {
        //get all keys of the team object
        const keys = Object.keys(team);
        //Generate random index
        const randomIndex = Math.floor(Math.random()*keys.length);
        //Use random index to select a random choice
        const randomChoice = team[keys[randomIndex]];

        return randomChoice;
        };

        //Get a random pokemon from the team
        const randomPokemon = getRandomPokemon(choosePokemon.team);
        //createa  alessage that takes the randomChoice and passes it into a message
        let message = `${randomPokemon.pokemon}! I choose you! Use ${randomPokemon.attack}!`;

        //log message
        console.log(message)
}

mixedMessages();


