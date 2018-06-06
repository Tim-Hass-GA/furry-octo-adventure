const orderTotal = require('./order_total');
// once jest installed, create a silly test
// to see if it is connected and works....
// it('works', () => {})
// it('works', () => { expect(1).toBe(1) }) // true
// it('works', () => { expect(1).toBe(2) }) // false

it('Quantity', () => {
  expect(orderTotal({
    items: [
      { 'name': 'Dragon Candy', price: 2, quantity: 3 }
    ]
  })).toBe(6)
})

it('No quantity specified', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon Food', price: 3 }
    ]
  })).toBe(3)
})

it('Checks Happy Path 1', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon Food', price: 8, quantity: 1 },
      { name: 'Dragon Cage (small)', price: 800, quantity: 1 }
    ]
  })).toBe(808)
})

it('Checks Happy Path 2', () => {
  expect(orderTotal({
    items: [
      { name: 'Dragon Collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 }
    ]
  })).toBe(60)
})
