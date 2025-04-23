import Employee from './Employee.js'

export default class FullTimeEmployee extends Employee {
  constructor(name, id, baseSalary, department, contact, annualBonus, paidLeaveDays) {
    super(name, id, baseSalary, department, contact);
    this.annualBonus = annualBonus;
    this.paidLeaveDays = paidLeaveDays;
  }

  calculateSalary() {
    return this.salary + this.annualBonus;
  }

  displayEmployee() {
    super.displayEmployee();
    console.log(`  (Full‑Time) Bonus: ${this.annualBonus}, Leave Days: ${this.paidLeaveDays}`);
  }
}
