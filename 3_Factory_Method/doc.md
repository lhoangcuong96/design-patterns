# Method factory


## Bài toán

- Cũng giống Factory(Simple Factory)
  - Khởi tạo các object có quá trình phức tạp, lặp lại
  - Ần đi chi tiết khởi tạo giúp không làm ảnh hưởng đến những nơi sử dụng khi sửa đổi và update
- Khác với Factory(Simple Factory) sẽ chỉ tạo ra 1 factory là dựa vào điều kiện để sử dụng các class creator để tạo ra các object khác nhau, Factory Method sẽ tạo ra các factory khác nhau mỗi factory sẽ tương ứng 1 loại Object được tạo ra dựa trên 1 class
- Nó chỉ làm giảm quá trình lặp lại code và ẩn đi chi tiết khởi tạo   

## Thành phần
- Factory method bao gồm:
  - Product(Interface, Abstract)
  - Concrete product(Implement Product)(Product cụ thể)
  - Creator(Interface, Abstract)
  - Concrete Creator

## Code
```
abstract class MyNotification{
  abstract send(): void;
}

class EmailNotification extends MyNotification {
  send(): void {
    console.log("Sending email notification");
  }
}

class SMSNotification extends MyNotification {
  send(): void {
    console.log("Sending SMS notification");
  }
}

abstract class NotificationFactory {
  notification: MyNotification | undefined;
  abstract createNotification():void;

  sendNotification(): void{
    this.notification?.send()
  };
}

class EmailNotificationFactory extends NotificationFactory {
  createNotification() {
    /* Some logic to create email notification
       ...
    */
    this.notification= new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification() {
    /* Some logic to create SMS notification
       ...
    */
    this.notification = new SMSNotification();
  }
}


class Main {
  constructor() {
    let emailFactory = new EmailNotificationFactory();
    emailFactory.sendNotification();
    
    let smsFactory = new SMSNotificationFactory();
    smsFactory.sendNotification();
  }
}
```

## Run
- npm install -g typescript ts-node '@types/node'
- ts-node index.ts