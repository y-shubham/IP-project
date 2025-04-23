import Employee from './Employee.js';

export default class Intern extends Employee {
  constructor(name, id, stipend, department, contact, university, internshipDuration) {
    super(name, id, stipend, department, contact);
    this.university = university;
    this.internshipDuration = internshipDuration;
  }

  calculateSalary() {
    return this.salary; 
  }

  displayEmployee() {
    super.displayEmployee();
    console.log(`  (Intern) University: ${this.university}, Duration: ${this.internshipDuration} mo`);
  }
}
