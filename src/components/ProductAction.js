import React from 'react';

export default class ProductAction extends React.Component {
  handleAddToCart = () => {
    this.props.addProductToCart(this.props.id);
  }

  render() {
    return (
      <div className="actions product-actions">
        <a className="button add-to-cart"
         onClick={this.handleAddToCart}
        >
          Add to Cart
        </a>
        <a className="button edit">Edit</a>
      </div>
    );
  }
}
