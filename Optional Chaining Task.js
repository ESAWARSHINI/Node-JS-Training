/**Description: You have an array of products, where each product may or may
not have properties like inventory and details . Write a function to
check if a product is in stock. If the inventory data is missing, assume the
product is out of stock.**/

//Original Code:

function isProductInStock(product) {
  if (product && product.inventory && product.inventory.count > 0) {
    return true;
  }
  return false;
}

// Refactored code

const stock = [
  { inventory: { count: 1 }, name: "Prod 1" },
  { inventory: { count: 9 }, name: "Prod 2" },
  { inventory: { count: 8 }, name: "Prod 3" },
  { inventory: { count: 3 }, name: "Prod 4" },
  { inventory: { count: 0 }, name: "Prod 5" },
];

function isProductInStock(stock) {
  for (var prod of stock) {
    console.log(
      prod?.inventory?.count ? "Product Available" : "Product not in stock"
    );
  }
}

isProductInStock(stock);

/**
   Description: You have an array of user objects. Each user object may or may
not have properties like address , contact , and email . Write a function
to safely access the user's email. If the email is not available, return 'Email not
provided'
   **/

// Original Code

function getUserEmail(user) {
  if (user && user.contact && user.contact.email) {
    return user.contact.email;
  } else {
    return "Email not provided";
  }
}

// Refactored code

var user = [
  { address: "salem", contact: { ph: 987654321, email: "shree@gmail.com" } },
  { address: "chennai", contact: { ph: 987654321, email: "abc@gmail.com" } },
  { address: "erode", contact: { ph: 987654321 } },
];

function getUserEmail1(user) {
  for (var item of user) {
    console.log(item?.contact?.email || "email not provided");
  }
}
getUserEmail1(user);

/**Description: Given a complex data structure of a company's departments,
write a function to retrieve the name of the manager of a specified
department. If the department or manager is not found, return 'Manager not
found'. **/

//Original code

function getDepartmentManager(company, departmentName) {
  if (company && company.departments) {
    const department = company.departments.find(
      (dept) => dept.name === departmentName
    );
    if (department && department.manager) {
      return department.manager.name;
    }
  }
  return "Manager not found";
}

//Refactored code

const company = [
  {
    dept: "Sales",
    manager: { name: "Manoj" },
  },
  {
    dept: "Sales",
    manager: { name: "RDX" },
  },
  {
    dept: "Marketing",
    manager: { name: "ESA" },
  },
];

function getDepartmentManager(company, departmentName) {
  var ManagerName = company.filter((obj) => obj?.dept == departmentName);
  console.log(
    ManagerName.length != 0
      ? ManagerName.map((obj) => obj?.manager?.name).join(",")
      : "Manager not found"
  );
}

console.log(getDepartmentManager(company, "Sales"));

/**Given an array of arrays representing a matrix, write a function
to safely access an element at a specific row and column. If the element does
not exist, return 'Element not found'* */

// Original code

function getMatrixElement(matrix, row, col) {
  if (matrix && matrix[row] && matrix[row][col] !== undefined) {
    return matrix[row][col];
  }
  return "Element not found";
}

// Refactored code

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const getMatrixElement = (matrix, row, col) => {
  let element = matrix?.[row]?.[col] || "Element not found";
  return element;
};
console.log(getMatrixElement(matrix, 1, 2));
