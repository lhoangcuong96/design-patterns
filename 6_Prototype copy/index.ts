class DatabaseConnection {
  id: number;
  status: string;
  constructor(id: number, status: string) {
    this.id = id;
    this.status = status;
  }

  connect() {
    console.log(`Connection ${this.id} established`);
    this.status = "active";
  }

  disconnect() {
    console.log(`Connection ${this.id} closed`);
    this.status = "idle";
  }
}

class DatabaseConnectionPool {
  size: number;
  pool: Array<DatabaseConnection> = [];
  constructor(size: number) {
    this.size = size;
    for (let i = 0; i < size; i++) {
      this.pool.push(new DatabaseConnection(i, "idle"));
    }
  }

  borrowConnection(): DatabaseConnection | null {
    const connection = this.pool.find((connect) => connect.status === "idle");
    if (connection) {
      connection.connect();
      return connection;
    }
    console.log("No connection available");
    return null;
  }

  returnConnection(connection: DatabaseConnection) {
    connection.disconnect();
  }
}

// Mô phỏng 1 server sử dụng connection pool
class WebServer {
  connectionPool: DatabaseConnectionPool;
  constructor(connectionPool: DatabaseConnectionPool) {
    this.connectionPool = connectionPool;
  }

  handleRequest(id: number) {
    console.log(`Handling request #${id}`);
    const connection = this.connectionPool.borrowConnection();
    if (connection) {
      setTimeout(() => {
        console.log(`Request #${id} finished`);
        this.connectionPool.returnConnection(connection);
      }, 200);
    }
  }
}

const pool = new DatabaseConnectionPool(3);

const server = new WebServer(pool);

for (let index = 0; index < 5; index++) {
  server.handleRequest(index);
}
