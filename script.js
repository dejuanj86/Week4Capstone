var inventory = [" Cereal", " Milk", " Bananas", " Dish Soap" , " Bread "];

var price = [3.99, 1.79, 1.99, 2.79, 1.89];

var cart = [];

var total = 0;

function addToCart(inventory) {
  cart.push(inventory);
  printCart(cart);
}

function printCart(cart) {
  for (var i = 0; i < cart.length; i++) {
    document.getElementById("cartbox").innerHTML = cart;
  }
}

function addToTotal(price) {
  total += price;
  updateTotalBox(total);
}

function updateTotalBox(total) {
  var taxTotal = (total + (total * .06));
  var grandTotal = "$" + parseFloat(taxTotal).toFixed(2);

  document.getElementById("totalbox").innerHTML = grandTotal;
}
