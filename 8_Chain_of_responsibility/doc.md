# Chain of responsibility
Là một pattern nhóm hành vi. Cho phép request được truyền qua các mắt xích handler, mỗi một mắt xích sẽ xử lý hoặc truyền tiếp qua 1 mắt xích cao hơn trong chuỗi. 

## Bài toán
- Ví dụ một hệ thống hỗ trợ theo tickets. Khi user submit ticket nó sẽ được đánh giá từng bậc từ thấp đến cao(mắt xích) đầu tiên là nhân viên hỗ trợ người dùng nếu không xử lý được sẽ chuyển tiếp cho trưởng nhóm và nếu không được sẽ chuyển cho quản lý ... Mỗi mắt xích sẽ quyết định yêu cầu có được xử lý hay không hay sẽ tiếp tục được chuyển tiếp

## Ứng dụng thực tế
- UI event handling: xử lý các event click chuột hay nhấn phím
- Middleware: Như middleware trong Express, mỗi middleware là 1 handler(mắt xích) trong chuỗi, có thể xử lý request hoặc tiếp tục chuyền đi cho các middleware khác để xử lý
- Logging system: Từng tuỳ loại thông tin mà sẽ được xử lý và ghi lại bởi các handler khác nhau
  - Ví dụ nếu là debug hoặc info level thì "Console" handler sẽ xử lý chỉ console ra mà thôi
  - Nếu level là warning hoặc error thì sẽ  được ghi lại bởi "File Log" handler
  - Nếu là level là error hoặc urgent thì sẽ được xử lý để gửi thông báo tới quản trị

## Nhược điểm:
- Chi phí xử lý request: Nếu xích quá dài sẽ ảnh hưởng đến hiệu năng
- Khó để debug

## Code
- Ví dụ 1:
```
class Approver {
  name: string;
  nextApprover: Approver | null;

  constructor(name: string) {
    this.name = name;
    this.nextApprover = null;
  }

  setNextApprover(approver: Approver) {
    this.nextApprover= approver
  }

  handleRequest(amount: number) {
    if (!this.nextApprover) {
      console.log("No one can handle this request");
      return;
    }
    this.nextApprover.handleRequest(amount);
  }
}

class Supervisor extends Approver{
  handleRequest(amount: number): void {
    if(amount<1000){
      console.log(`This request is handled by Supervisor ${this.name}`)
      return
    }
    super.handleRequest(amount);
  }
}
class Manager extends Approver{
  handleRequest(amount: number): void {
    if(amount<3000){
      console.log(`This request is handled by Manager ${this.name}`)
      return
    }
    super.handleRequest(amount);
  }
}

class Director extends Approver{
  handleRequest(amount: number): void {
    if(amount<5000){
      console.log(`This request is handled by Director ${this.name}`)
      return
    }
    super.handleRequest(amount);
  }
}

const supervisor = new Supervisor("Cuong supervisor")
const manager = new Manager("Cuong 2 manager")
const director = new Director("Cuong 3 director")

supervisor.setNextApprover(manager)
manager.setNextApprover(director)

supervisor.handleRequest(900)
supervisor.handleRequest(2000)
supervisor.handleRequest(4000)
supervisor.handleRequest(6000)

```
- Ví dụ 2:
```
class Handler {
  #next: Handler | null;

  constructor(handler?: Handler) {
    this.#next = handler || null;
  }

  handleRequest(request: any): { message: string } {
    if (this.#next) {
      return this.#next.handleRequest(request);
    } else {
      return { message: "End of chain!" };
    }
  }
}

class ValidationHandler extends Handler {
  handleRequest(request: any) {
    if (!request.body || Object.keys(request.body).length === 0) {
      return { message: "Invalid request!" };
    }
    return super.handleRequest(request);
  }
}

class AuthenticationHandler extends Handler {
  handleRequest(request: any) {
    if (!request.headers?.authorization) {
      return { message: "Unauthorized" };
    }
    return super.handleRequest(request);
  }
}

class AuthorizationHandler extends Handler {
  handleRequest(request: any) {
    if (request.user?.role !== "admin") {
      return { message: "Forbidden!" };
    }
    return super.handleRequest(request);
  }
}

const request_1 = {
  body: {
    value: "1",
  },
  headers: { authorization: null },
  user: { role: "admin" },
};

const request_2 = {
  body: {
    value: "1",
  },
  headers: { authorization: "token" },
  user: { role: "user" },
};

const request_3 = {
  body: {},
  headers: { authorization: "token" },
  user: { role: "admin" },
};

const chain = new AuthenticationHandler(
  new AuthorizationHandler(new ValidationHandler())
);
const result_1 = chain.handleRequest(request_1);
const result_2 = chain.handleRequest(request_2);
const result_3 = chain.handleRequest(request_3);

console.log(result_1, result_2, result_3);

```
- Ví dụ về 1 logging system:
```
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

```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts