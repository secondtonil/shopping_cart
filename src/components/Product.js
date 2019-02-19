import React from 'react';
import ProductAction from './ProductAction';

export default class Product extends React.Component {
  render() {
    let { id, title, quantity, price } = this.props;
    return (
      <div className="product">
        <div className="product-details">
          <h3>{title}</h3>
          <p className="price">{price}</p>
          <p className="quantity">{quantity} left in stock</p>
          <ProductAction
            id={id}
            addProductToCart={this.props.addProductToCart}
          />
          <a className="delete-button"><span>X</span></a>
        </div>
      </div>


    );
  }
}
