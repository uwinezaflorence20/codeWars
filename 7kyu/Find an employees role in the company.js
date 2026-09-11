function findEmployeesRole(name) {
 const [first, last] = name.split(" ");

  for (let emp of employees) {
    if (emp.firstName === first && emp.lastName === last) {
      return emp.role;
    }
  }
  return "Does not work here!";
}