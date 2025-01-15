# Chain of responsibility


## Bài toán
- Ví dụ một hệ thống hỗ trợ theo tickets. Khi user submit ticket nó sẽ được đánh giá từng bậc từ thấp đến cao(mắt xích) đầu tiên là nhân viên hỗ trợ người dùng nếu không xử lý được sẽ chuyển tiếp cho trưởng nhóm và nếu không được sẽ chuyển cho quản lý ... Mỗi mắt xích sẽ quyết định yêu cầu có được xử lý hay không hay sẽ tiếp tục được chuyển tiếp

## Khi nào sử dụng builder
- Khi việc khởi tạo đối tượng tốn nhiều tài nguyên: Ví dụ Database Connection , Network Connection, threads, 1 đối tượng lớn

## Object pool pattern hoạt động như thế nào
- Tạo ra pool : Object pool sẽ tạo ra 1 tập hợp các objects, nó sẽ được phân bố trước và sẵn sàng để sử dụng
- Mượn object: khi cần, client có thể mượn 1 object trong pool 
- Trả object: Sau khi được sử dụng, object sẽ được trả về pool thay vì là bị phá huỷ
- Tái sử dụng object: Sau khi trở về pool, object sẽ sẵn sàng để tiếp tục sử dụng

## Trường hợp sử dụng
- Hiện với việc các phần cứng càng ngày càng được nâng cấp thì việc tạo mới các đối tượng và phsử dụng Object pool sẽ phù hợp cho 

## Code
```
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

```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts