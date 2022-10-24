class Ninja{
    // CONSTRUCTOR
    constructor(name, health, strength = 3, speed = 3){
        // ATTRIBUTES
        this.name = name
        this.health = health
        this.strength = strength
        this.speed = speed
    }
    // METHODS
    sayName(){
        console.log(`HIYA! ${this.name}`)
        return this
    }
    showStats(){
        console.log(`NAME: ${this.name} HEALTH: ${this.health} STR: ${this.strength} SPD: ${this.speed}`)
        return this
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

// let ed = new Ninja("Ed")
// ed.drinkSake()

class Sensei extends Ninja{
    // CONSTRUCOTRS
    constructor(name, wisdom = 10){
        super(name, 200, 10, 10)
        this.wisdom = wisdom
    }
    // METHODS
}



