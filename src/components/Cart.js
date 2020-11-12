import React, { Component } from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';

class Cart extends Component {
  render() {
    let total = 0;

    this.props.cart.map(item => total += item.product.price * item.quantity);

    return (
        <div className="row">
          <h2>My Cart</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.cart.map(item => {
                return (
                  <CartItem item={item} key={item.product.id + "_" + item.quantity}/>
                )
              })
            }
            </tbody>
            <tfoot>
              <tr>
                <td></td>
                <td></td>
                <td className="text-right"><strong>Total:</strong></td>
                <td><strong>${total.toFixed(2)}</strong></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart
  }
};

export default connect(mapStateToProps)(Cart);