abstract class Command {
  execute() {
    throw new Error("Abstract method!");
  }

  redo() {
    throw new Error("Abstract method!");
  }

  undo() {
    throw new Error("Abstract method!");
  }
}

class SendEmailCommand extends Command {
  email: string;

  constructor(email: string) {
    super();
    this.email = email;
  }
  execute() {
    console.log(`Send email: ${this.email}`);
  }
}

class SendSMSCommand extends Command {
  phoneNumber: string;

  constructor(phoneNumber: string) {
    super();
    this.phoneNumber = phoneNumber;
  }

  execute() {
    console.log(`Send SMS: ${this.phoneNumber}`);
  }
}

class TaskQueue {
  queue: Command[] = [];

  addCommand(command: Command) {
    this.queue.push(command);
  }

  processTasks() {
    while (this.queue.length > 0) {
      const command = this.queue.shift();
      if (command) {
        command.execute();
      }
    }
  }
}

const taskQueue = new TaskQueue();
taskQueue.addCommand(new SendEmailCommand("lhoangcuong1996@gmail.com"));
taskQueue.addCommand(new SendSMSCommand("0123456789"));

taskQueue.processTasks()