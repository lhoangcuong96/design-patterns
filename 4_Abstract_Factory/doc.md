# Method factory


## Bài toán

- [Factory method](https://github.com/lhoangcuong96/design-patterns/blob/master/3_Factory_Method/doc.md) sẽ tập trung vào việc tạo ra đối tượng, Abstract Factory sẽ tập trung vào việc tạo ra các nhóm đối tượng có liên quan hay phụ thuộc

## Thành phần
- Abstract Factory bao gồm:
  - Abstract factory: khai báo 1 tập hợp các methods để tạo ra các đối tượng
  - Concrete factory: Triễn khai phương thức khởi tạo cho các nhóm đối tượng
  - Abstract product: Khai báo 1 interface cho 1 loại đối tượng
  - Concrete product: triễn khai cho abstract product

## Code
- Ví dụ sử dụng để phát triễn 1 api sử dụng 2 loại db là Mongodb và Postgres. Dựa vào type api sẽ tạo ra 1 connection và repository cụ thể
- Đầu tiên xác định các thành phần
  - Tạo ra 2 đối tượng là connection và repository của 2db
    - Abstract factory:  => AbstractDatabaseFactory
    - Nhóm đối tượng(Connection, repository) nằm trong 2 DB là Mongodb và Postgres
      -  => Concrete factory: MongoDbFactory, PostgresFactory
    - Abstract product: interface Connection, interface Repository
    - Concrete product: Connection, Repository
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