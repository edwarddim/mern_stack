// 1. DEFINE A CLASS
class Vehicle{
    // MEMBER VARIABLES / ATTRIBUTES
    // CONSTRUCTOR
    constructor(manufacturer, model, color){
        this.miles = 0
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
    }
    // OTHER METHODS
    test(){
        console.log("TEST METHOD")
    }

    drive(amount){
        this.miles += amount
    }
    odometer(){
        console.log("Total Mileage: ", this.miles)
    }

    carInfo = () => {
        console.log(this.manufacturer)
        console.log(this.model)
        console.log(this.color)
    }
}

// 2. INSTANTIATE AN OBJECT
const myCar = new Vehicle("Kia", "Optima", "Grey")
myCar.drive(20)
myCar.drive(2)
myCar.drive(55)
myCar.drive(123)
myCar.odometer()
myCar.carInfo()


class M5 extends Vehicle{
    // MEMBER VARIABLES
    // CONSTRUCTORS
    constructor(manufacturer, model, color, turbo){
        super(manufacturer, model, color)
        this.turbo = turbo
    }

    // METHODS
}


const newCar = new M5("BMW", "M5", "White", true)
newCar.odometer()
newCar.turbo = false