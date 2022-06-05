var users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' }
];

// -------------------------------------------------------------------------- //
// A LIST OF LAST NAMES OF USERS WHO ARE NOT AN INSTRUCTOR
const list = users.filter(user => !user.role.includes("Instructor")).map(user => user.lastName)
// console.log(list)

// GET A LIST OF USERS WHO'S FIRST NAME IS LONGER THAN 4 CHARACTERS
let new_arr =[]
for(let i = 0; i < users.length; i++){
    if(users[i].firstName.length > 4){
        new_arr.push(users[i])
    }
}
// filter
const new_users = users.filter(user => user.firstName.length > 4 )
const not_instructors = users.filter( user => user.role !== "Instructor")
// console.log(new_users)
// console.log(not_instructors)


// GET A LIST OF THE FIRST NAMES OF THE USERS
// map
const first_names = users.map(pineapple => pineapple.firstName)
// console.log(first_names)

const index_names = users.map((user, i) => {
    var string = ""
    string += user.firstName
    string += user.lastName
    string += i
    return string
})
// console.log(index_names)

// forEach
// users.forEach(user => console.log(`Hello my name is ${user.firstName} ${user.lastName}`))


const pokemons = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
// console.log(pokemons.filter(pokemon => pokemon.id % 3 === 0))

// an array with just the names of the pokémon
// console.log(pokemons.map(poke => poke.name))

// an array with just the names of pokémon with an id greater than 99
console.log(
    pokemons.filter(poke => poke.id > 99).map(poke => poke.name)
)

// a count of the number of pokémon that are "normal" type
console.log(
    pokemons.filter(poke => poke.types.includes("normal")).length
)