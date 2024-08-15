function printEmplyeesNum(input) {
  input.forEach((employee) => {
    const employeeName = employee;
    const employeeNumber = employee.length;

    console.log(`Name: ${employeeName} -- Personal Number: ${employeeNumber}`);
  });
}

printEmplyeesNum([
  "Silas Butler",

  "Adnaan Buckley",

  "Juan Peterson",

  "Brendan Villarreal",
]);
