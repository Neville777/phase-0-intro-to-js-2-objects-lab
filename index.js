// Write your solution in this file!
// Initialize the employee object
const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street",
  };
  
  // Function to update employee with a new key-value pair (non-destructive)
  function updateEmployeeWithKeyAndValue(employee, key, value) {
   
    return { ...employee, [key]: value };
  }
  
  // Function to update employee with a new key-value pair (destructive)
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   
    employee[key] = value;
    return employee; 
  }
  
  // Function to delete a key-value pair from the employee object (non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee; 
  }
  
  // Function to delete a key-value pair from the employee object
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee; 
  }
  
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "age", 30);
  console.log(updatedEmployee);
  
  const destructivelyUpdatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "city", "New York");
  console.log(destructivelyUpdatedEmployee);
  
  const employeeWithoutStreetAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutStreetAddress);
  
  const destructivelyUpdatedEmployeeWithoutName = destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log(destructivelyUpdatedEmployeeWithoutName);
  