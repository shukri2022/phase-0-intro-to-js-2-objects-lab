// Write your solution in this file!


function updateEmployeeWithKeyAndValue(employee, key, value) {

  return {
      ...employee,
      [key]: value  
  };
}


let employee = {
  name: "John Doe",
  streetAddress: "123 Main St"
};

let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
console.log(updatedEmployee);


console.log(employee);
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; 
  return employee; 
}
function deleteFromEmployeeByKey(employee, key) {
  let newEmployee = { ...employee }; 
  delete newEmployee[key]; 
    return newEmployee; 
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key]; 
  return employee; 
}