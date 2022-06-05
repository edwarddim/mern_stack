// DEFINING A CLASS
class Vehicle{
    constructor(manufacturer, model, color="Black"){
        this.manufacturer = manufacturer
        this.model = model
        this.color = color
        this.miles = 0
        return this
    }
    drive(mileage=0){
        this.miles += mileage
        return this
    }

    odometer(){
        console.log("Current miles: "+ this.miles)
        return this
    }
}

// INSTANTIATING AN OBJECT
const car = new Vehicle("Toyota", "Camry", "White")
car.drive(100).drive(100).drive(100).drive(100).odometer()




class M5 extends Vehicle{
    constructor(color){
        super("BMW", "M5", color)

        this.hp = 615
        this.messager = true
    }

    turboBoost(miles){
        console.log("Going plaid")
        super.drive(miles)
    }

    voiceCommands(command){
        console.log("Did you say: "+command)
    }

}

const ed = new M5("Red")
ed.turboBoost(100)
ed.odometer()
ed.voiceCommands("Navigate me home")
