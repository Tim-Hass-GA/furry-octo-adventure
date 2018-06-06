const fetch = require('node-fetch');
const orderTotal = require('orderTotal');

const result = orderTotal(fetch, {
  country: 'US',
  items: [
    { 'name': 'Dragon Waffles', price: 20, quantity: 2 }
  ]
})
/*
const result =
  fetch('https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=US&postalCode=98116', {
    headers: {
      'apikey': process.env.TAX_API_KEY
    }
  })
  .then(response => response.json())
  .then(data => data.totalRate.value)
*/
result


// Authorization: Basic aHR0cHdhdGNoOmY='
// https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=US&postalCode=98116
//
// {
//   "totalRate": 0.101,
//   "rates": [
//     {
//       "rate": 0.065,
//       "name": "WA STATE TAX",
//       "type": "State"
//     },
//     {
//       "rate": 0,
//       "name": "WA COUNTY TAX",
//       "type": "County"
//     },
//     {
//       "rate": 0.036,
//       "name": "WA CITY TAX",
//       "type": "City"
//     }
//   ]
// }
