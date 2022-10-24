// parent Vehicle class
class Vehicle {
    // CONSTRUCTOR - DEFINE ALL ATTRIBUTES
    constructor(manufacturer, model, color, miles = 0) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = miles;
    }
    // METHODS
    drive() {
        this.miles += 10;
        console.log(`You drove your ${this.constructor.name} Model: ${this.model} it now has ${this.miles} miles on it.`);

    }
    // simple method in the parent class
    parentFunction() {
        return "This is coming from the parent!";
    }
}


// child M5 class
class M5 extends Vehicle {
    constructor(color) {
        // UTILIZE THE PARENT CONSTRUCTOR
        super("BMW", "M5", color);
        // CUSTOMIZE OUR CLASSES
        this.seatHeater = false
    }
    // simple function in the child class
    childFunction() {
        // by using super, we can call the parent method
        const message = super.parentFunction();
        console.log(message);
    }
    drive(){
        console.log("vroom vroom")
        this.miles += 15
        console.log("ODOMETER: ", this.miles)
    }
}

const m5 = new M5("Blue");
m5.drive()

