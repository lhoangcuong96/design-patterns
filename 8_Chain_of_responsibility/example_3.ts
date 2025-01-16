class LoggerHandler {
  private nextHandler: LoggerHandler | null;
  constructor(nextHandler?: LoggerHandler) {
    this.nextHandler = nextHandler || null;
  }

  log(message: string, level: string) {
    if (this.nextHandler) {
      this.nextHandler.log(message, level);
    } else {
      console.log("End of chain!");
    }
  }
}

class ConsoleHandler extends LoggerHandler {
  log(message: string, level: string) {
    if (level === "console" || level === "info") {
      console.log(message);
      return;
    }
    super.log(message, level);
  }
}

class FileLogHandler extends LoggerHandler {
  log(message: string, level: string) {
    if (level === "warning" || level === "error") {
      /* Handle logging details in file*/
      console.log(message);
      return;
    }
    super.log(message, level);
  }
}

class PushingNotificationHandler extends LoggerHandler {
    log(message: string, level: string) {
      if (level === "error") {
        /* Handle pushing notification*/
        console.log(message);
        return;
      }
      super.log(message, level);
    }
  }
  
const loggerChain = new ConsoleHandler(new FileLogHandler(new PushingNotificationHandler()));
loggerChain.log("This is an error message", "error");
loggerChain.log("This is a warning message", "warning");
loggerChain.log("This is an info message", "info");
