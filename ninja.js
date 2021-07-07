class Ninja{
    // constructor method
    constructor(name, health=100, speed=3, strength=3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
    sayName = () => {
        console.log(`Hello my name is ${this.name}`)
    }
    sayStats = () => {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`)
    }
    drinkSake(){
        this.health += 10
    }
}

class Sensei extends Ninja{
    // constructor method
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }
    speakWisdom = () => {
        // super => class Ninja
        // super.drinkSake() => Ninja.drinkSake()
        this.drinkSake()
        console.log("THIS IS A WISE MESSAGE")
    }

    // drinkSake(){
    //     console.log("SENSEI DRINKING SOME PREMIUM SAKE")
    //     this.health += 100
    // }
}

const standard_ninja = new Ninja("Edward")
// console.log(standard_ninja)
// standard_ninja.sayName()
standard_ninja.sayStats()
const op_ninja = new Ninja("Anjiro", 200, 5, 5)
// console.log(op_ninja)
// op_ninja.sayName()
// op_ninja.sayStats()
// op_ninja.drinkSake()
// op_ninja.drinkSake()
// op_ninja.drinkSake()
// op_ninja.sayStats()

const sensei = new Sensei("Jiraya", 500)
sensei.sayStats()
// sensei.speakWisdom()
sensei.drinkSake()
sensei.sayStats()
