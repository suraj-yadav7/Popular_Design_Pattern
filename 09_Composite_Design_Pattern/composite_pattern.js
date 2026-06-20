  /** COMPOSITE DESIGN PATTERN */
  /**  The Composite Design Pattern (often referred to as object composition or the composite pattern) is a structural design pattern
   * that lets you compose objects into tree structures to represent part-whole hierarchies. It allows clients to treat
   * individual objects and groups of objects uniformly through a single interface. */


  /** Component     Description  */
  // Component  : An interface or abstract class defining operations common to both simple and complex elements.
  // Leaf       : An individual, basic object that has no child elements and implements the Component interface directly.
  // Composite  : A container object that holds child elements (leaves or other composites) and delegates execution to them.
  // Client     : The external system that interacts with your objects strictly via the unified Component interface.


/** Abstract class for FileSystemComponent */
class FileSystemComponent {
  constructor(){
    if(new.target === FileSystemComponent){
        throw new TypeError('Cannot construct FileSystemComponent instances directly');
    }
  }

  display() {
    throw new Error('Method display() must be implemented.');
  }
};

// Concrete class for File
class File extends FileSystemComponent{
  constructor(name, size){
    super();
    this.name = name;
    this.size = size;
  }

  display() {
    console.log(`File: ${this.name} (${this.size} bytes)`);
  }
};

// Concrete class for Directory
class Directory extends FileSystemComponent {
  constructor(name) {
    super();
    this.name = name;
    this.components = [];
  }

  display(){
    console.log(`Directory: ${this.name}`);
    for(const component of this.components){
        component.display();
    }
  }

  add_component(component){
    this.components.push(component);
  }
};



// Main function
const main = () => {
  // Create leaf objects (files)
  const file1 = new File('notes.txt', 1024);
  const file2 = new File('photo.jpg', 2048);

  // Create a composite object (directory)
  const directory = new Directory('My Files');

  // Add leaf objects to the directory
  directory.add_component(file1);
  directory.add_component(file2);

  // Display the directory (including its contents)
  directory.display();
};
main()