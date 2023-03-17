interface User {
  firstName: string;
  lastName: string;
  printMessage(): void;
};

class UserAccount {
  _firstName: string;
  _lastName: string;

  // Constructor
  constructor(firstName: string = '', lastName: string = '') {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // First Name accessors
  get firstName(): string {
    return this._firstName;
  }

  set firstName(name: string) {
    this._firstName = name;
  }

  // Last Name accessors
  get lastName(): string {
    return this._lastName;
  }

  set lastName(name: string) {
    this._lastName = name;
  }

  // Name
  get name(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  printMessage():void {
    let helloWorld: string = `Hello ${this.name}`;
    console.log(helloWorld);
  }
  
}

const firstName: any = prompt("What is your First Name: ");
const lastName: any = prompt("What is your Last Name");
let userAccount = new UserAccount(firstName, lastName);
userAccount.printMessage();