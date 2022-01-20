//constructor function

function Car(cname ,year){
    this.cname =cname;
    this.year =year;
    console.log(this);
    this.getCarDetails =function (){
        return `${this.cname} manufacture year is ${this.year}`
    }

}

const car1 = new Car('BMW',2021)
console.log(car1.getCarDetails());

const car2 = new Car('Jaguar',2019)
console.log(car2.getCarDetails());

const car3 = new Car('BMW',2018)
console.log(car2.getCarDetails());
