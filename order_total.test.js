const orderTotal = require('./order_total');
// once jest installed, create a silly test
// to see if it is connected and working....
// it('works', () => {})
// it('works', () => { expect(1).toBe(1) }) // true
// it('works', () => { expect(1).toBe(2) }) // false

test('calls the api correctly', () => {
  // no longer needed when api key put in place
  // let isFakeFetchCalled = false
  const fakeProcess = {
    env: {
      TAX_API_KEY: 'key123'
    }
  }
  // const fakeFetch = (url, opts) => {
  //   expect(opts.headers.apikey).toBe('key123')
  //   expect(url).toBe('https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=US&postalCode=98116')
  //   // isFakeFetchCalled = true
  //   return Promise.resolve({
  //     json: () => Promise.resolve({
  //         totalRate: 0.065
  //       })
  //     })
  // }
  const fakeFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
        totalRate: 0.065
      })
    }))
  return orderTotal(fakeFetch, fakeProcess, {
    country: 'US',
    items: [
      { 'name': 'Dragon Waffles', price: 20, quantity: 2 }
    ]
  }).then(result => {
    expect(result).toBe(20*2*1.065)
    expect(fakeFetch).toBeCalledWith(
      'https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=US&postalCode=98116',
      { 'headers': { 'apikey':'key123' } })
    // expect(isFakeFetchCalled).toBe(true)
  })
})

// it('Quantity', () => {
//   expect(orderTotal({
//     items: [
//       { 'name': 'Dragon Candy', price: 2, quantity: 3 }
//     ]
//   })).toBe(6)
// })

// it('No quantity specified', () => {
//   expect(orderTotal({
//     items: [
//       { name: 'Dragon Food', price: 3 }
//     ]
//   })).toBe(3)
// })

// it('Checks Happy Path 1', () => {
//   expect(orderTotal({
//     items: [
//       { name: 'Dragon Food', price: 8, quantity: 1 },
//       { name: 'Dragon Cage (small)', price: 800, quantity: 1 }
//     ]
//   })).toBe(808)
// })

// it('Checks Happy Path 2', () => {
//   expect(orderTotal({
//     items: [
//       { name: 'Dragon Collar', price: 20, quantity: 1 },
//       { name: 'Dragon chew toy', price: 40, quantity: 1 }
//     ]
//   })).toBe(60)
// })

// with the promise... that hopefully will work...
it('Quantity promise', () =>
  orderTotal(null, null, {
    items: [
      { 'name': 'Dragon Candy', price: 2, quantity: 3 }
    ]
  }).then(result => expect(result).toBe(6)))

it('No quantity specified promise', () =>
  orderTotal(null, null, {
    items: [
      { name: 'Dragon Food', price: 3 }
    ]
  }).then(result => expect(result).toBe(3)))

it('Checks Happy Path 1 promise', () =>
  orderTotal(null, null, {
    items: [
      { name: 'Dragon Food', price: 8, quantity: 1 },
      { name: 'Dragon Cage (small)', price: 800, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(808)))

it('Checks Happy Path 2 promise', () =>
  orderTotal(null, null, {
    items: [
      { name: 'Dragon Collar', price: 20, quantity: 1 },
      { name: 'Dragon chew toy', price: 40, quantity: 1 }
    ]
  }).then(result => expect(result).toBe(60)))
