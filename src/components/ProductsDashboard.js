import React from 'react';
import data from '../lib/data';
import ProductsList from './ProductsList';
import Cart from './Cart';

export default class ProductsDashboard extends React.Component {
  state = {
    productData: data,
    cart: []
  }

  addProductToCart = (id) => {
    let new_data = this.state.productData.map((item) => {
      if (item.id == id) {
        return Object.assign({}, item, {
          quantity: item.quantity - 1,
        });
      }
      return item;
    });
    this.setState({
      productData: new_data
    });
  };

  render() {
    return (
      <div>

        <header>
          <h1>The Shop!</h1>
          <Cart />
        </header>

        <main>
          <ProductsList
            products= {this.state.productData}
            addProductToCart={this.addProductToCart}
          />

          <div className="add-form">
            <p><a className="button add-product-button">Add A Product</a></p>
            <h3>Add Product</h3>
            <form>
              <div className="input-group">
                <label htmlFor="product-name">Product Name</label>
                <input type="text" id="product-name" value=""/>
              </div>

              <div className="input-group">
                <label htmlFor="product-price">Price</label>
                <input type="text" id="product-price" value=""/>
              </div>

              <div className="input-group">
                <label htmlFor="product-quantity">Quantity</label>
                <input type="text" id="product-quantity" value=""/>
              </div>

              <div className="actions form-actions">
                <a className="button">Add</a>
                <a className="button">Cancel</a>
              </div>
            </form>
          </div>
        </main>


      </div>
    );
  }
}
