const orderTotal =  (order) => {
  const totalNormalItems =
    order.totalNormalItems
    .filter( x => !x.shipping )
    .reduce( (prev, cur) => prev + cur.quantity * cur.price, 0)
  const shippingItem = order.items.find( x => !!x.shipping )
  const shipping = totalNormalItems > 1000 ? 0 : shippingItem.price
  return totalNormalItems
}
