// Abstract Product
interface NotificationService {
  send(message: string): void;
}

// Concrete Product
class EmailNotification implements NotificationService {
  send(message: string): void {
    console.log(`Sending Email: ${message}`);
  }
}

class SMSNotification implements NotificationService {
  send(message: string): void {
    console.log(`Sending SMS: ${message}`);
  }
}

// Abstract Creator
abstract class NotificationFactory {
  abstract createNotification(): NotificationService;
}

// Concrete Creator
class EmailNotificationFactory extends NotificationFactory {
  createNotification(): NotificationService {
    return new EmailNotification();
  }
}

class SMSNotificationFactory extends NotificationFactory {
  createNotification(): NotificationService {
    return new SMSNotification();
  }
}

// Client code sử dụng Factory Method
function sendNotification(factory: NotificationFactory, message: string): void {
  const notification = factory.createNotification();
  notification.send(message);
}

sendNotification(new EmailNotificationFactory(), "Hello via Email!");
sendNotification(new SMSNotificationFactory(), "Hello via SMS!");
