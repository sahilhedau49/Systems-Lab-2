class Employee {
  constructor(name, id, salary, exp) {
    this.name = name;
    this.id = id;
    this.salary = salary;
    this.exp = exp;
  }

  addincrement() {
    if (this.exp > 5) {
      this.salary += this.salary * 0.2;
      console.log("\nEXP is ", this.exp, "Icrement 20%");
    } else {
      this.salary += this.salary * 0.15;
      console.log("\nEXP is ", this.exp, "Icrement 15%");
    }
  }

  display() {
    console.log("Name is : ", this.name);
    console.log("Emp id : ", this.id);
    console.log("Salary : ", this.salary);
    console.log("Year of Exp : ", this.exp);
    console.log("---------------------");
  }
}

var a = new Employee("Smit", 64, 120000, 4);
a.display();
a.addincrement();
a.display();
var b = new Employee("Samrat", 57, 120000, 6);
b.display();
b.addincrement();
b.display();
