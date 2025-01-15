# Builder


## Bài toán

- Ví dụ Car có nhiều loại car và cấu trúc constructor khác nhau. Các loại yêu cầu khác nhau

## Thành phần
- Builder bao gồm:
  - Product: Đối tượng cần xây dựng, điển hình là các đối tượng phức tạp gồm nhiều phần
  - Builder: Là lớp cơ sở (interface, asbstract) để định nghĩa những steps để tạo ra đối tượng. Lớp này thường cung cấp các phương thức để cài đặt cho từng phần
  - Concrete Builder: Lớp implement cho builder để xây dựng từng phần của đối tượng
  - Director: Điều hướng quá trình xây dựng đối tượng. Nó sẽ lấy builder và cấu trúc các steps để xây dựng ra 1 đối tượng cuối

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