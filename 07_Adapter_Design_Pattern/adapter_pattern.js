/** ADAPTER DESIGN PATTERN */
/** Adapter Design Pattern is a structural pattern that acts as a bridge between two incompatible interfaces,
 * allowing them to work together.It is especially useful for integrating legacy code or third-party libraries into a new system.
It enables classes with incompatible interfaces to collaborate without modifying their source code.
It promotes code reusability by allowing existing functionality to be used in new systems. */

/** Component           Description */
// Target Interface:  The interface expected by the client, defining the operations it can use.
// Adaptee:           The existing class with an incompatible interface that needs integration.
// Adapter:           Implements the target interface and uses the adaptee internally, acting as a bridge.
// Client:            Uses the target interface, unaware of the adapter or adaptee details.

/** Target Interface */
const Printer = {
    print: function() {
        throw new Error('print method must be implemented!');
    }
};

/** Adaptee: A legacy system */
class AdapteeLegacyPayment{
  processPayment(){
    console.log("Payment is processing...")
  }
};

/** Adapter */
class Adapter{
  constructor(){
    this.legacyPaymentSys = new AdapteeLegacyPayment()
  }

  payment(){
    this.legacyPaymentSys.processPayment()
  }
};

/** Client */
class Client{
  clientMethod(paymentSystem){
    paymentSystem.payment()
  };

  main(){
    const system = new Adapter()
    this.clientMethod(system)
  }
};

/** Calling Client Main Function */
const clientObj = new Client()
clientObj.main()