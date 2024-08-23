// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

//let salary = 0;

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  let addEmployees = true;

  const employeesArray = [];

  while (addEmployees) {
    var firstName = prompt("Enter your first name ");
    var lastName = prompt("Enter your last name");
    var salary = prompt("Enter your salary");
    salary = parseFloat(salary);
    addEmployees = confirm("Keep adding employees");

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employeesArray.push(employee);
  }
  console.log(addEmployees);
  console.log(employeesArray);
  return employeesArray;
  ///  todo: we need to add something if they put the data wrong in salary
};
// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  //salary = isNaN(number(salary)) ? 0 : number(salary);
  let totalSalary = 0;

  for (let i = 0; i < employeesArray.length; i++) {
    console.log(`${i + 1}) ${employeesArray[i]}`);
    totalSalary += employeesArray[i].salary;
  }
  const dataAverageSalary = totalSalary / employeesArray.length;
  console.log(`avarage salary ${dataAverageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  let randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(randomEmployee.firstName);
};
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
