class Dinglemouse {
  constructor(firstName = '', lastName = '') {
    this.firstName = firstName ?? '';
    this.lastName = lastName ?? '';
  }

  getFullName() {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    } else {
      return this.firstName || this.lastName || '';
    }
  }
}

// Both names provided
let person1 = new Dinglemouse("Matt", "Valley");
console.log(person1.getFullName()); // Output: "Matt Valley"

// Only last name provided
let person2 = new Dinglemouse(null, "Eastwood");
console.log(person2.getFullName()); // Output: "Eastwood"

// Only first name provided
let person3 = new Dinglemouse("Clint");
console.log(person3.getFullName()); // Output: "Clint"

// Both names empty or null
let person4 = new Dinglemouse();
console.log(person4.getFullName()); // Output: ""
