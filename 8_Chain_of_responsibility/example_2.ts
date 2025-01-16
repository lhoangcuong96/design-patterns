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
