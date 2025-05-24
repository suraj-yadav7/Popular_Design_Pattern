/** OBSERVER DESIGN PATTERN */
//The Observer Pattern defines a one-to-many relationship between objects so that when one object (called the subject) changes state,
// all its dependents (called observers) are notified and updated automatically.
// To implement event-driven systems.
// To achieve loose coupling between objects.
// To allow multiple parts of an application to react to changes without tight dependencies.

/** Subject */
class YoutubeChannel{
  constructor(){
    this.users=[]
  };

  subscribe(userProfile){
    this.users.push(userProfile)
  };

  unsubscribe(userId){
    this.users = this.users.filter((elem) => elem !== userId)
  };

  notify(data){
    this.users.forEach((user) => user.notification(data))
  };
};

/** Observer */
class User{
  constructor(name){
    this.name=name
  }

  notification(info){
    console.log(`${this.name} you have notification:  ${info}`)
  }
};

/** Object Creation */
const sportsYT = new YoutubeChannel()

const userOne = new User("Prabhas")
const userTwo = new User("Mahesh")

/** User subscribe to YT channel */
sportsYT.subscribe(userOne)
sportsYT.subscribe(userTwo)
console.log("Subscribers(users) list: ", sportsYT.users)  // Subscribers(users) list:  [ User { name: 'Prabhas' }, User { name: 'Mahesh' } ]

/** Notification */
sportsYT.notify("last night SRH vs RCB highlights added.")
// Output:
// Prabhas you have notification: last night SRH vs RCB highlights added.
// Mahesh you have notification:  last night SRH vs RCB highlights added.

/** User unsubscribe to YT channel */
sportsYT.unsubscribe(userTwo)
console.log("Current Subscribers(users) list: ", sportsYT.users) // Current Subscribers(users) list:  [ User { name: 'Prabhas' } ]