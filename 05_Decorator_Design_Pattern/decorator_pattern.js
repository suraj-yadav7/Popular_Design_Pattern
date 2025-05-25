/** DECORATOR DESIGN PATTERN */
//The Decorator Pattern is a structural design pattern that lets you add new behavior to an object dynamically,
// without changing its original structure or class. It wraps the original object with a decorator,
// augmenting or modifying its functionality.
/** Component	      Description */
//  Component       Interface	Base interface (or class) for the object
//  Concrete        Component	The actual object we want to extend
//  Decorator	      Wraps the component and delegates the call
//  Concrete        Decorators	Add actual new behavior

/** Component Interface */
class Laptop{
  cost(){
    throw new Error("Need to define valid 'cost' functionality before using.")
  }
  specificationDetails(){
    throw new Error("Need to define valid 'specificationDetails' functionality before using.")
  }
};

/** Concrete Component */

class BasicLaptop extends Laptop{
  cost(){
    return 25000
  }
  specificationDetails(){
    const details = {
      processor:"six core",
      ram:"8gb",
      rom:"512gb"
    }
    return details
  }
};

/** Decorator */
class LaptopDecorator extends Laptop{
  constructor(laptop){
    super()
    this.laptop = laptop
  }

  cost(){
    return this.laptop.cost()
  }

  specificationDetails(){
    return this.laptop.specificationDetails()
  }
};

/** Concrete Decorator */
class ramAddon extends LaptopDecorator{
  cost(){
    return super.cost()+5000
  }
  specificationDetails(){
    return super.specificationDetails.details = {
      processor:"six core",
      ram:"16gb",
      rom:"512gb"
    }
  }
};

let acer = new BasicLaptop()
console.log("acer: ", acer.cost()) //acer:  25000
console.log("acer: ", acer.specificationDetails()) //acer:  { processor: 'six core', ram: '8gb', rom: '512gb' }


acer = new ramAddon(acer)
console.log("acer: ", acer.cost()) //acer:  30000
console.log("acer: ", acer.specificationDetails()) //acer:  { processor: 'six core', ram: '16gb', rom: '512gb' }