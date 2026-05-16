/** OBSERVER DESIGN PATTERN */
//The Observer Pattern defines a one-to-many relationship between objects so that when one object (called the subject) changes state,
// all its dependents (called observers) are notified and updated automatically.
// To implement event-driven systems.
// To achieve loose coupling between objects.
// To allow multiple parts of an application to react to changes without tight dependencies.

/** Observable (Subject) */
class Channel{
  constructor(){
    this.usersList = []
    this.videoData=null
  };

  addSubscriber(newUser){
    if(!this.usersList.includes(newUser)){
      this.usersList.push(newUser)
    }
  };

  removeSubscriber(user){
    this.usersList = this.usersList.filter((elem) => elem !== user)
  };

  notify(){
    this.usersList.forEach((user) => {
      user.update()
    })
  };

  addNewVideo(title){
    this.videoData =title
    console.log("New Video Added: ", title)
    this.notify()
  };

  getVideoData(){
    return `Checkout our new Video: ${this.videoData}`
  };
};

/** Observer */
class User{
  constructor(userName, channelName){
    this.name = userName,
    this.channel = channelName
  };

  update(){
    console.log("Get Video Data For User: ", this.channel.getVideoData())
  };
};

/** Channel Object */
const coderArmy = new Channel()

/** User Object */
const userOneObj = new User("Shubham", coderArmy)
const userTwoObj = new User("Manoj", coderArmy)

/** Add Subscribers */
coderArmy.addSubscriber(userOneObj)
coderArmy.addSubscriber(userTwoObj)

/** Add New Video */
coderArmy.addNewVideo("SOLID PRINCIPLE")

/** Remove Subscriber */
coderArmy.removeSubscriber(userOneObj)

/** Again Add New Video */
coderArmy.addNewVideo("OPEN-CLOSED PRINCIPLE")