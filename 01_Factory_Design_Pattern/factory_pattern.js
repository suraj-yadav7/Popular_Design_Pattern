/** Factory Design Pattern */
// The Factory Pattern provides an interface for creating objects in a superclass,
// but allows subclasses or methods to alter the type of objects that will be created.
// Instead of using the 'new' keyword directly to create objects, you delegate that responsibility to factory method.
class Samsung{
  constructor(brand, ram, rom){
    this.brand = brand,
    this.ram   = ram,
    this.rom   = rom
  }

  samsungSpecs(){
    return `I have Best AI mobile '${this.brand}' with ${this.ram}gb ram and ${this.rom}gb rom.`
  }
};

class Iphone{
  constructor(brand, ram, rom){
    this.brand = brand,
    this.ram   = ram,
    this.rom   = rom
  }

  iphoneSpecs(){
    return `I have Best Camera mobile '${this.brand}' with ${this.ram}gb ram and ${this.rom}gb rom.`
  }
};

class OnePlus{
  constructor(brand, ram, rom){
    this.brand = brand,
    this.ram   = ram,
    this.rom   = rom
  }

  oneplusSpecs(){
    return `I have Best highSpecs-affordable mobile '${this.brand}' with ${this.ram}gb ram and ${this.rom}gb rom.`
  }
};

class MobileFactory{
  static phoneCreation(brand, ram, rom){
    switch(brand){
      case "samsung":
        return new Samsung(brand, ram, rom)
      case "iphone":
        return new Iphone(brand, ram, rom)
      case "oneplus":
        return new OnePlus(brand, ram, rom)
      case "default":
        return "Provide valid brand name."
    }
  }
};

const samsungCreate = MobileFactory.phoneCreation("samsung", 8, 256)
console.log(samsungCreate.samsungSpecs())
const iphoneCreate  = MobileFactory.phoneCreation("iphone", 6, 128)
console.log(iphoneCreate.iphoneSpecs())
const oneplusCreate = MobileFactory.phoneCreation("oneplus", 12, 500)
console.log(oneplusCreate.oneplusSpecs())