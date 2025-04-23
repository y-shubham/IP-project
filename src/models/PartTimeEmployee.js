import Employee from './Employee.js';

export default class PartTimeEmployee extends Employee {
  constructor(name, id, hourlyRate, department, contact, hoursWorked) {
    super(name, id, hourlyRate * hoursWorked, department, contact);
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  calculateSalary() {
    return this.hourlyRate * this.hoursWorked;
  }

  displayEmployee() {
    super.displayEmployee();
    console.log(`  (Part‑Time) Rate: ${this.hourlyRate}/hr, Hours: ${this.hoursWorked}`);
  }
}
