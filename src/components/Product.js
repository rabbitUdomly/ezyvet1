import React, { Component } from 'react';

class Product extends Component
{
  addToCart = (e) => {
    e.preventDefault();
    this.props.addToCart(this.props.product)
  }

  render() {
    const { product } = this.props;

    return (
      <div className="col-md-6">
        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <h4 className="title">{ product.name }</h4>
            <div className="price-new">${ product.price.toFixed(2) }</div>
            <span onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Product;