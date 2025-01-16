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
