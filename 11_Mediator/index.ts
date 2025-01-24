class Room {
  users: Array<User>;
  constructor() {
    this.users = [];
  }

  addUser(user: User) {
    this.users.push(user);
  }

  sendMessage(sender: User, message: string) {
    this.users.forEach((user) => {
      if (user !== sender) {
        user.receiveMessage(message);
      }
    });
  }
}

class User {
  name: string;
  room: Room | null;

  constructor(name: string) {
    this.name = name;
    this.room = null;
  }

  setRoom(room: Room) {
    this.room = room;
  }

  getName() {
    return this.name;
  }

  sendMessage(message: string) {
    if (!this.room) {
      console.log(`${this.name} is not in any room`);
      return;
    }
    console.log(`${this.name} sent: ${message}`);
    this.room.sendMessage(this, message);
  }

  receiveMessage(message: string) {
    console.log(`${this.name} received: ${message}`);
  }
}

const room = new Room();
const user1 = new User("User_1");
const user2 = new User("User_1");
const user3 = new User("User_1");



