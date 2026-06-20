/** PROXY DESIGN PATTERN */
/** The Proxy Design Pattern is a structural design pattern that provides a surrogate or placeholder object to control access to another object.
 * By acting as an intermediary, it lets you intercept requests to perform extra tasks—like access control, caching, logging, or
 * lazy loading—without modifying the original object. */

  /** Component     Description  */
  // Subject      : The interface that defines the common methods for both the RealSubject and the Proxy.
  // RealSubject  : The actual, underlying object that performs the core business logic or holds expensive/sensitive data.
  // Proxy        :  The surrogate class that implements the Subject interface. It maintains a reference to the RealSubject and
  // controls when and how the client interacts with it.

class Image{
  display(){
    throw new Error("Inherit class must implement this method.")
  }
};

class RealImage extends Image{
  constructor(filename){
    super()
    this.filename = filename
    this.loadImage()
  }

  loadImage(){
    console.log(`Loading image : ${this.filename} from SSD.`)
  }

  display(){
    console.log("Displaying image : ", this.filename)
  }
};

class ProxyImage extends Image{
    constructor(filename){
    super()
    this.filename = filename
    this.real = null
  }

  display(){
    if(!this.real){
      this.real = new RealImage(this.filename)
    }
    this.real.display()
  }
};

const client = () => {
  image = new ProxyImage("football")
  // First time display //
  image.display()

  // Second time display //
  image.display()
}
client()