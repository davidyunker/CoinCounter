/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


// Write a program that will convert a dollar amount to the number of coins that
// make up the amount. Use the common American coins of quarters, dimes, nickels,
// and pennies.



function coinCounter (value) {
  var cents = Math.floor(value * 100)
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes:    0,
    nickels:  0,
    pennies:  0,
  };

  coinPurse.quarters = Math.floor(cents / 25)
  cents %= 25

  coinPurse.dimes = Math.floor(cents / 10)
  cents %= 10

  coinPurse.nickles = Math.floor(cents / 5)
  cents %= 5

  coinPurse.pennies = Math.floor(cents / 1)
  cents %= 1


  return coinPurse;
}

var coins = coinCounter(4.51);
console.log(coins);