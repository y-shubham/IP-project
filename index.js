import readline from 'readline';
import FullTimeEmployee from './src/models/FullTimeEmployee.js';
import PartTimeEmployee from './src/models/PartTimeEmployee.js';
import Manager from './src/models/Manager.js';
import Intern from './src/models/Intern.js';
import EmployeeManager from './src/controllers/EmployeeManager.js';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const EM = new EmployeeManager();

function prompt(q) {
  return new Promise(res => rl.question(q, ans => res(ans)));
}

async function mainMenu() {
  console.log(`
1) Add Full‑Time
2) Add Part‑Time
3) Add Manager
4) Add Intern
5) List All
6) Find by ID
7) Remove by ID
8) Total Payroll
9) Exit
`);
  const choice = await prompt('> ');
  switch (choice.trim()) {
    case '1': await addFT(); break;
    case '2': await addPT(); break;
    case '3': await addMgr(); break;
    case '4': await addIntern(); break;
    case '5': EM.listAll(); break;
    case '6': {
      const id = parseInt(await prompt('ID to find: '));
      const e = EM.findByID(id);
      e ? e.displayEmployee() : console.log('Not found');
      break;
    }
    case '7': {
      const id = parseInt(await prompt('ID to remove: '));
      EM.removeByID(id);
      console.log('Removed if existed.');
      break;
    }
    case '8':
      console.log('Total Payroll =', EM.totalPayroll());
      break;
    case '9':
      rl.close();
      return;
    default:
      console.log('Invalid');
  }
  mainMenu();
}

async function addFT() {
  const name = await prompt('Name: ');
  const id   = parseInt(await prompt('ID: '));
  const sal  = parseFloat(await prompt('Base Salary: '));
  const dept = await prompt('Department: ');
  const contact = await prompt('Contact: ');
  const bonus = parseFloat(await prompt('Annual Bonus: '));
  const leaves = parseInt(await prompt('Paid Leave Days: '));
  EM.add(new FullTimeEmployee(name, id, sal, dept, contact, bonus, leaves));
}

async function addPT() {
  const name = await prompt('Name: ');
  const id   = parseInt(await prompt('ID: '));
  const rate = parseFloat(await prompt('Hourly Rate: '));
  const hrs  = parseFloat(await prompt('Hours Worked: '));
  const dept = await prompt('Department: ');
  const contact = await prompt('Contact: ');
  EM.add(new PartTimeEmployee(name, id, rate, dept, contact, hrs));
}

async function addMgr() {
  const name = await prompt('Name: ');
  const id   = parseInt(await prompt('ID: '));
  const sal  = parseFloat(await prompt('Base Salary: '));
  const dept = await prompt('Department: ');
  const contact = await prompt('Contact: ');
  const bonus = parseFloat(await prompt('Annual Bonus: '));
  const leaves = parseInt(await prompt('Paid Leave Days: '));
  const allow = parseFloat(await prompt('Special Allowance: '));
  EM.add(new Manager(name, id, sal, dept, contact, bonus, leaves, allow));
}

async function addIntern() {
  const name = await prompt('Name: ');
  const id   = parseInt(await prompt('ID: '));
  const stip = parseFloat(await prompt('Stipend: '));
  const dept = await prompt('Department: ');
  const contact = await prompt('Contact: ');
  const uni = await prompt('University: ');
  const dur = parseInt(await prompt('Duration (mo): '));
  EM.add(new Intern(name, id, stip, dept, contact, uni, dur));
}

mainMenu();
