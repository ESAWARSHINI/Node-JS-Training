/**Description: You have an array of products, where each product may or may
not have properties like inventory and details . Write a function to
check if a product is in stock. If the inventory data is missing, assume the
product is out of stock.**/

//Original Code:

function isProductInStock(product) {
    if (product && product.inventory && 
   product.inventory.count > 0) {
    return true;
    }
    return false;
   }

// Refactored code

const stock = [
    { inventory: {count:1},name: "Prod 1" },
    { inventory: {count:9}, name: "Prod 2" },
    { inventory: {count:8}, name: "Prod 3"},
    { inventory: {count:3}, name: "Prod 4"},
    { inventory: {count:0}, name: "Prod 5" }
  ];
 
  function isProductInStock(stock) {
      for(var prod of stock){
   console.log(prod?.inventory?.count ?"Product Available":"Product not in stock");
      }
  }
 
  isProductInStock(stock);
  
  