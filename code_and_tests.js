/*
INIT FILE... to get started.
refactored and split into individual files...
*/
function orderTotal(order) {
  return order.items.reduce((prev, cur) => cur.price * (cur.quantity || 1) + prev, 0)
}

// testing for the quantity
if (orderTotal({
  items: [
    { 'name': 'Dragon Candy', price: 2, quantity: 3 }
  ]
}) !== 6){
  throw new Error('Check fail: Quantity')
}

// testing orderTotal
// keep test small and try to check only on item.
if (orderTotal({
  items: [
    { name: 'Dragon Food', price: 3 }
  ]
}) !== 3) {
  /////// checking the happy day scenario... ///
  throw new Error('Check fail: No quantity Happy Path')
}

// testing orderTotal
// starter tests may be a little more involved... to get you started
if (orderTotal({
  items: [
    { name: 'Dragon Food', price: 8, quantity: 1 },
    { name: 'Dragon Cage (small)', price: 800, quantity: 1 }
  ]
}) !== 808) {
  /////// checking the happy day scenario... ///
  throw new Error('Check fail: Happy Path 1')
}

if (orderTotal({
  items: [
    { name: 'Dragon Collar', price: 20, quantity: 1 },
    { name: 'Dragon chew toy', price: 40, quantity: 1 }
  ]
}) !== 60) {
  /////// checking the happy day scenario... ///
  throw new Error('Check fail: Happy Path 2')
}
