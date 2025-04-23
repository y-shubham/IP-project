export default class EmployeeManager {
  constructor() {
    this.employees = [];  // store all Employee instances
  }

  add(emp) {
    this.employees.push(emp);
  }

  // Quick‑sort by employeeID
  sortByID() {
    const qs = (arr) => {
      if (arr.length < 2) return arr;
      const pivot = arr[Math.floor(arr.length / 2)].employeeID;
      const left  = arr.filter(e => e.employeeID < pivot);
      const mid   = arr.filter(e => e.employeeID === pivot);
      const right = arr.filter(e => e.employeeID > pivot);
      return [...qs(left), ...mid, ...qs(right)];
    };
    this.employees = qs(this.employees);
  }

  // Binary search by employeeID (assumes sorted)
  findByID(id) {
    let lo = 0, hi = this.employees.length - 1;
    while (lo <= hi) {
      const mid = Math.floor((lo + hi) / 2);
      const midID = this.employees[mid].employeeID;
      if (midID === id) return this.employees[mid];
      if (midID < id) lo = mid + 1;
      else hi = mid - 1;
    }
    return null;
  }

  removeByID(id) {
    this.employees = this.employees.filter(e => e.employeeID !== id);
  }

  listAll() {
    this.sortByID();
    console.log('\n=== Employee List ===');
    this.employees.forEach(e => e.displayEmployee());
  }

  totalPayroll() {
    return this.employees.reduce((sum, e) => sum + e.calculateSalary(), 0);
  }
}
