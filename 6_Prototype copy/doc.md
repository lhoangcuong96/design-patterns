# Object pool


## Bài toán
- Object pool dùng để quản lý cách thức đối tượng được tạo ra và tái sử dụng, đặc biệt đối với các đối tượng tiêu tốn tài nguyên khi khởi tạo vd db connection . Thay vì phải khởi tạo lại 1 instance của đối tượng mỗi lần khi cần, Object pool sẽ duy trì và tái sử dụng nó

## Khi nào sử dụng builder
- Khi việc khởi tạo đối tượng tốn nhiều tài nguyên: Ví dụ Database Connection , Network Connection, threads, 1 đối tượng lớn
- Những object thường xuyên được khởi tạo và phá huỷ: việc tạo và phá huỷ 1 object thường xuyên có thể dẫn đến việc hiệu xuất kém
- Những object được tái sử dụng nhiều nơi

## Object pool pattern hoạt động như thế nào
- Tạo ra pool : Object pool sẽ tạo ra 1 tập hợp các objects, nó sẽ được phân bố trước và sẵn sàng để sử dụng
- Mượn object: khi cần, client có thể mượn 1 object trong pool 
- Trả object: Sau khi được sử dụng, object sẽ được trả về pool thay vì là bị phá huỷ
- Tái sử dụng object: Sau khi trở về pool, object sẽ sẵn sàng để tiếp tục sử dụng

## Trường hợp sử dụng
- Hiện với việc các phần cứng càng ngày càng được nâng cấp thì việc tạo mới các đối tượng và phsử dụng Object pool sẽ phù hợp cho 

## Code
- Ví dụ xây dựng 1 car object. Car có cấu tạo như động cơ, bánh xe, chỗ ngồi, màu sắc, tốc độ. Cách tạo ra chúng không giống nhau
```
// Abstract Factory
abstract class AbstractDatabaseFactory {
  abstract createConnection(): Connection;
  abstract createRepository(): Repository;
}

// Concrete Factory
class MongoDbFactory extends AbstractDatabaseFactory {
  createConnection(): Connection {
    return new MongoConnection();
  }
  createRepository(): Repository {
    return new MongoRepository();
  }
}

class PostgresFactory extends AbstractDatabaseFactory {
  createConnection(): Connection {
    return new PostgresConnection();
  }
  createRepository(): Repository {
    return new PostgresRepository();
  }
}

// Abstract Product
interface Connection {
  connect(): void;
}

interface Repository {
  find(id: string): any;
}

// Concrete Product
class MongoConnection implements Connection {
  connect(): void {
    console.log("Connected to MongoDB");
  }
}

class MongoRepository implements Repository {
  find(id: string): any {
    console.log("Finding data from MongoDB");
  }
}

class PostgresConnection implements Connection {
  connect(): void {
    console.log("Connected to Postgres");
  }
}

class PostgresRepository implements Repository {
  find(id: string): any {
    console.log("Finding data from Postgres");
  }
}

// database selector
function createDatabaseFactory(databaseType: string) {
  if (databaseType === "MongoDB") {
    return new MongoDbFactory();
  } else if (databaseType === "Postgres") {
    return new PostgresFactory();
  } else {
    throw new Error("Invalid database type");
  }
}

// Sử dụng code dưới client

const databaseFactory = createDatabaseFactory("MongoDB");
const connection = databaseFactory.createConnection();
connection.connect()
const repository = databaseFactory.createRepository();
repository.find("123");

```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts