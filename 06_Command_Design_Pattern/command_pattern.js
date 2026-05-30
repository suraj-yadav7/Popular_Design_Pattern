/** COMMAND DESIGN PATTERN */
/** The Command Design Pattern is a behavioral design pattern that turns a request into a stand-alone object
 * containing all information about the request. This transformation encapsulates the operation,
 * allowing you to pass requests as arguments, delay or queue their execution,and support undoable operations
*/

/** Component           Description */
// Command Interface:   Declares the common method (example - execute()) for all commands.
// Concrete Commands:   Implement the interface and encapsulate specific actions (e.g., on, off TV).
// Invoker:             Initiates the command execution without knowing the details of command (example- remote control).
// Receiver:            Performs the actual operation defined by the command (Example AC, TV).

/** Command Interface */
class Command {
  execute(){
    throw new Error("Must implement this method.")
  }
};

/** Concrete Command: ON */
class DeviceOnCommand extends Command{
  constructor(device){
    super()
    this.device = device
  }

  execute(){
    this.device.turnOn()
  }
};

/** Concrete Command: OFF */
class DeviceOffCommand extends Command{
  constructor(device){
    super()
    this.device = device
  }

  execute(){
    this.device.turnOff()
  }
};

/** Concrete Command: Channel Change of TV */
class ChanndelChangeCommand extends Command{
  constructor(device){
    super()
    this.device = device
  }

  execute(){
    this.device.changeChannel()
  }
};

/** Receiver Interface */
class Device{
  turnOn(){
    throw new Error("Must implemement 'turnOn' method.")
  }
  turnOff(){
    throw new Error("Must implemement 'turnOff' method.")
  }
};

/** Concrete Receiver TV */
class Tv extends Device{
  turnOn(){
    console.log("TV is turned - ON.")
  }
  turnOff(){
    console.log("TV is turned - OFF.")
  }
  changeChannel(){
    console.log("Channel changed successfully.")
  }
};

/** Concrete Receiver AC */
class Ac extends Device{
  turnOn(){
    console.log("AC is turned - ON.")
  }
  turnOff(){
    console.log("AC is turned - OFF.")
  }

  lowTemp(){
    console.log("Temperature is lowered to 18 degree.")
  }
  normalTemp(){
    console.log("Temperature is Normal 21c")
  }
};

/** Invoker */
class Remote{
  command = null

  setCommand(command){
    this.command = command
  };

  pressButton(){
    if(this.command !== null){
      this.command.execute()
    }else{
      console.log("No command assigned for execution.")
    }
  }
};


/** MAIN FUNCTION */
const mainFunction = () => {
  // Create Devices
  const tv = new Tv()
  const ac = new Ac()

  // Create Commands
  const onAc = new DeviceOnCommand(ac)
  const changeChannel = new ChanndelChangeCommand(tv)

  // Create Invoker
  const remote = new Remote()

  // Execute Command
  remote.setCommand(onAc)
  remote.pressButton()

  remote.setCommand(changeChannel)
  remote.pressButton()
};
mainFunction()