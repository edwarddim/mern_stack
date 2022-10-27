const pokemons = Object.freeze([
    { 
        "id": 1, 
        "name": "Bulbasaur", 
        "types": ["poison", "grass"]
    },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
// an array of pokémon objects where the id is evenly divisible by 3
let results = []
for(let i = 0; i < pokemons.length; i++){
    if(pokemons[i].id % 3 === 0){
        results.push(pokemons[i])
    }
}

const prob1 = pokemons.filter((watermelon) => watermelon.id % 3 === 0 )


// an array of pokémon objects that are "fire" type
const prob2 = pokemons.filter((poke) => poke.types.includes("fire") )


// an array of pokémon objects that have more than one type

// an array with just the names of the pokémon
const prob3 = pokemons.map((poke) => poke.name)

// an array with just the names of pokémon with an id greater than 99
const prob4 = pokemons.filter((poke) => poke.id > 99 ).map((poke) => poke.name )

// an array with just the names of the pokémon whose only type is poison

// an array containing just the first type of all the pokémon whose second type is "flying"
const prob5 = pokemons
    .filter((poke) => poke.types.length > 1 && poke.types[1] === "flying")
    .map((poke) => {
        return(
            {
                name:poke.name,
                first_type:poke.types[0]
            }
        )
    })
// a count of the number of pokémon that are "normal" type