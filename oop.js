
// DEFINED THE NINJA CLASS
class Ninja{
    // MEMBER VARIABLES
    // CONSTRUCTORS
    constructor(nameParam, healthParam){
        this.name = nameParam
        this.health = healthParam
        this.speed = 3
        this.strength = 3
    }
    // METHODS
    sayName(){
        console.log(this.name)
    }

    showStats = () => {
        console.log(this.name)
        console.log(this.health)
        console.log(this.speed)
        console.log(this.strength)
    }

    drinkSake(){
        this.health += 10
        // this.health = this.health + 10
    }
}


class Sensei extends Ninja{
    // CONSTRUCTOR / MEMBER VARIABLES
    constructor(nameParam, healthParam){
        super(nameParam,healthParam);
        // ADD A WISDOM ATTRIBUTE - DEFAULT VALUE 10
    }

    // ADD A speakWisdom() METHOD
}


// INSTANTIATE NINJA OBJECTS
const ninja1 = new Ninja("Edward", 80)
// ninja1.sayName()
ninja1.showStats()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.drinkSake()
ninja1.showStats()

const ninja2 = new Ninja("John Doe", 100)
ninja2.showStats()
const ninja3 = new Ninja("Jane Doe", 120)


// def __init__(self) => CONSTRUCTOR