class Command2 {
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

class InsertDB extends Command2 {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  execute(): void {
    console.log(`Insert data: ${this.data}`);
  }

  undo(): void {
    console.log(`Undo insert data: ${this.data}`);
  }
}

class UpdateDB extends Command2 {
  data: string;

  constructor(data: string) {
    super();
    this.data = data;
  }

  execute(): void {
    console.log(`Update data: ${this.data}`);
  }

  undo(): void {
    console.log(`Undo update data: ${this.data}`);
  }
}

class TaskQueue2 {
  queue: Command2[] = [];

  addCommand(command: Command2) {
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

const taskQueue2 = new TaskQueue2();
taskQueue2.addCommand(new InsertDB("Data 1"));
taskQueue2.addCommand(new UpdateDB("Data 2"));

taskQueue2.processTasks();