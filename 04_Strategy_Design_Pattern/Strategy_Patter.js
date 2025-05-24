/** STRATEGY DESIGN PATTERN */
//The Strategy Pattern is a behavioral design pattern that lets you define a family of algorithms,
// put each one in a separate class (or function), and make them interchangeable at runtime.
// It enables selecting an algorithm’s behavior at runtime without altering the code that uses it.
// Component	          Role
// Context	            Uses a Strategy to perform an action (eg: NetflixSubscription)
// Strategy             Interface	Defines a method that each strategy must implement (eg: planInfo method of each strategy)
// Concrete Strategy	  Specific implementations of the algorithm(eg: SingleUserSubStrategy)

class NetflixSubscription{
  constructor(subStrategy){
    this.subStrategy = subStrategy
  }

  changeStrategy(subStrategy){
    this.subStrategy = subStrategy
  }

  getPlanDetails(){
    this.subStrategy.planInfo()
  }
};

class SingleUserSubStrategy{
  planInfo(){
    console.log("User can access service on single screen at time - Mobile/Laptop/Tv. Montly Price:Rs.299/-")
  }
};

class coupleUserSubStrategy{
  planInfo(){
    console.log("User can access service on two screen at time - Mobile/Laptop/Tv. Montly Price:Rs.699/-")
  }
};

class familyUserSubStrategy{
  planInfo(){
    console.log("User can access service on five screen at time - Mobile/Laptop/Tv. Montly Price:Rs.999/-")
  }
};

const singleUser = new SingleUserSubStrategy()
const coupleUser = new coupleUserSubStrategy()
const familyUser = new familyUserSubStrategy()

const netflix = new NetflixSubscription(singleUser)
netflix.getPlanDetails() // User can access service on single screen at time - Mobile/Laptop/Tv. Montly Price:Rs.299/-

//Changing subscrition strategy
netflix.changeStrategy(familyUser)
netflix.getPlanDetails() //User can access service on five screen at time - Mobile/Laptop/Tv. Montly Price:Rs.999/-