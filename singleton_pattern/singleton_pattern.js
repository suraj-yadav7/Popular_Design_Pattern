/** SINGLETON DESIGN PATTERN */
//The Singleton pattern ensures that only one instance of a class is ever created and
// provides a global access point to that instance.

/** Implementation of singleton using class */
let count = 1
class Counter{
    constructor(){
    if(Counter.instance){
            return Counter.instance
        }
        Counter.instance = this
        return this
    }
    getCurrentCount(){
        return count
    }

    incrementCount(){
        return count++
    }

    decrementCount(){
        return count--
    }
};

const firstCounterObj = new Counter()
const SecondCounterObj = new Counter()
console.log("Construtor with if block, sends exsitng instance: ", firstCounterObj === SecondCounterObj)  // true
console.log("Construtor after removing if block: ", firstCounterObj === SecondCounterObj)  // false

/** Implementation of singleton uisng functional(Closure) */
// There are no classes or mutable objects (ideally).
// You use pure functions and closures to encapsulate behavior.
// Singleton-like behavior can be achieved by ensuring a function or value is only initialized once, then reused.

const createConfig = (() => {
    let instance;

    const init = () => {
    // Simulate loading some config data
    return {
        appName: "MyApp",
        version: "1.0.0",
        createdAt: new Date()
        };
    };

    return () => {
        if (!instance) {
        instance = init(); // Create the config once
        }
        return instance;
    };
})();

// Usage
const config1 = createConfig();
const config2 = createConfig();

console.log(config1 === config2); // true
console.log(config1.createdAt); // Same instance reused