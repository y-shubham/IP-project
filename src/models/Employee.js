export default class Employee {
  constructor(name, employeeID, salary, department, contactInfo) {
    this.name = name;
    this.employeeID = employeeID;
    this.salary = salary;
    this.department = department;
    this.contactInfo = contactInfo;
  }

  displayEmployee() {
    console.log(`ID: ${this.employeeID} | ${this.name} | Dept: ${this.department} | Salary: ${this.salary}`);
  }

  calculateSalary() {
    return this.salary;
  }
}
