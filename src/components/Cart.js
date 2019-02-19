import React from  'react';

const cartEmpty = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <p>Your cart is empty</p>
      <p>Total: $0</p>
      <a className="button checkout disabled">Checkout</a>
    </div>
  );
}

export default class Cart extends React.Component {
  state = {
    cartItemId: [],
  };

  cartItemCount = (id) => {
  
  };
  // each time an item comes in, check if the id exists in cart state
  // if id exists in cart state, then increment the count property of that id
  // and return the count for that id
  // if the id doesn't exist, set the count property to 1 and return the count

  totalPrice = () => {
    let priceOfEach = this.props.cart.map((item) => item.price);
    return priceOfEach.reduce((acc, curr) => acc + curr);
  };

  render() {
    if (this.props.cart.length == 0) {
      return (
        cartEmpty()
      );
    } else {
      return (
        <div className="cart">
        <h2>Your Cart</h2>
          <table>
            <tbody>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {this.props.cart.map((item) =>
              <tr>
                <td>{item.title}</td>
                <td>{this.cartItemCount(item.id - 1)}</td>
                <td>{item.price}</td>
              </tr>
            )}
            </tbody>
          </table>
          <p>Total: {this.totalPrice()}</p>
          <a className="button checkout disabled">Checkout</a>
        </div>
      );
    }
  }
}
