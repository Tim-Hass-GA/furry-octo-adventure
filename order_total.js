function orderTotal(fetch, process, order) {
  if (order.country) {
    return fetch(`https://sandbox-rest.avatax.com/api/v2/taxrates/bypostalcode?country=${order.country}&postalCode=98116`, {
      headers: {
        apikey: process.env.TAX_API_KEY
      }
    })
      .then(response => response.json())
      .then(data => data.totalRate)
      // .then(x => console.log(x))
      .then(taxrate => order.items.reduce((prev, cur) =>
        cur.price * (cur.quantity || 1) + prev, 0) * (1 + taxrate))
    }
  return Promise.resolve(order.items.reduce((prev, cur) =>
    cur.price * (cur.quantity || 1) + prev, 0))
}

module.exports = orderTotal;
