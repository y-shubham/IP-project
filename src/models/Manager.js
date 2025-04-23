import FullTimeEmployee from './FullTimeEmployee.js';

export default class Manager extends FullTimeEmployee {
  constructor(name, id, baseSalary, department, contact, annualBonus, paidLeaveDays, specialAllowance) {
    super(name, id, baseSalary, department, contact, annualBonus, paidLeaveDays);
    this.specialAllowance = specialAllowance;
  }

  calculateSalary() {
    return super.calculateSalary() + this.specialAllowance;
  }

  displayEmployee() {
    super.displayEmployee();
    console.log(`  (Manager) Special Allowance: ${this.specialAllowance}`);
  }
}
