/** FACADE DESIGN PATTERN */
/** The Facade Design Pattern is a structural software pattern that provides a simplified, unified interface to a complex system, library, or framework.
 * It hides the intricate underlying details, letting the client interact with a single, easy-to-use class rather than manually managing
 * multiple interconnected components */

/** Subsystems */
class PowerSupply {
  providePower() {
    console.log("Power Supply: Providing power...");
  }
}

class CoolingSystem {
  startFans() {
    console.log("Cooling System: Fans started...");
  }
}

class CPU {
  initialize() {
    console.log("CPU: Initialization started...");
  }
}

class Memory {
  selfTest() {
    console.log("Memory: Self-test passed...");
  }
}

class HardDrive {
  spinUp() {
    console.log("Hard Drive: Spinning up...");
  }
}

class BIOS {
  boot(cpu, memory) {
    console.log("BIOS: Booting CPU and Memory checks...");
      cpu.initialize();
      memory.selfTest();
  }
};

class OperatingSystem {
  load() {
    console.log("Operating System: Loading into memory...");
  }
}

/** Facade */
class ComputerFacade {
  constructor() {
    this.powerSupply = new PowerSupply();
    this.coolingSystem = new CoolingSystem();
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
    this.bios = new BIOS();
    this.os = new OperatingSystem();
  }

  startComputer() {
    console.log("----- Starting Computer -----");

    this.powerSupply.providePower();
    this.coolingSystem.startFans();
    this.bios.boot(this.cpu, this.memory);
    this.hardDrive.spinUp();
    this.os.load();

    console.log("Computer Booted Successfully!");
  }
};

// Client
class FacadePattern {
  main() {
    const computer = new ComputerFacade();
    computer.startComputer();
  }
}

const clientA = new FacadePattern()
clientA.main()