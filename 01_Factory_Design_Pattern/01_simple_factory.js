/** SIMPLE FACTORY  */
/** The Factory Design Pattern is a creational pattern that provides an interface for creating objects in a superclass
 * but allows subclasses to alter the type of objects created. It promotes loose coupling by separating
 * object instantiation logic from the client code, adhering to the Open/Closed Principle. */

 // --- Burger Base Class ---
class Burger{
  prepare(){
    console.log("Base class prepare method.")
    throw new Error("prepare() must be implemented");
  }
};

// --- Concrete Burger Implementations Class ---
class BasicBurger extends Burger{
  prepare(){
    console.log("This is BasicBurger.")
  }
};

class StandardBurger extends Burger{
  prepare(){
    console.log("Thsis is StandardBurger.")
  }
}

class PremiumBurger extends Burger{
  prepare(){
    console.log("This is PremiumBurger.")
  }
};

// --- Burger Factory ---
class BurgerFactory{
  createBurger(type){
    switch(type){
      case "basic":
        return new BasicBurger()
      case "standard":
        return new StandardBurger()
      case "premium":
        return new PremiumBurger()
      default:
        return null
    }
  }
};

// --- Object Creation ---
const burgerType = "premium"
const factory = new BurgerFactory()
const burger = factory.createBurger(burgerType)
if(burger){
  burger.prepare()
}else{
  console.log("Provide Correct Burger Type")
};