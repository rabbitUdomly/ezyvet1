import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartQuantity } from '../store/actions/cartActions';

class CartItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      quantity: this.props.item.quantity,
    };
  }

  handleChange = (e) => {
    if (e.target.value <= 0) {
      alert("Quantity must be greater than or equal to 1");

      return;
    }

    if (e.target.value > this.props.item.product.amount) {
      alert("You have exceeded the available items of this product!");

      return;
    }

    if (this.state.quantity !== e.target.value) {

      this.setState({
        quantity: e.target.value
      }, () => {
        this.props.updateCartQuantity(this.props.item.product.id, this.state.quantity);
      });
    }
  }

  render() {
    const { item } = this.props;

    return (
      <tr>
        <td><strong>{ item.product.name }</strong></td>
        <td>${ item.product.price.toFixed(2) }</td>
        <td title="Quantity">
          <input type="number" min="1" className="form-control input-sm my-product-quantity" onChange={this.handleChange} value={this.state.quantity}/>
        </td>
        <td>${ (item.product.price * item.quantity).toFixed(2) }</td>
        <td className="text-center">
          <span onClick={() => this.props.removeFromCart(item.product.id)} className="btn btn-xs btn-danger my-product-remove">X</span>
        </td>
      </tr>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartQuantity: (productId, quantity) => dispatch(updateCartQuantity(productId, quantity)),
    removeFromCart: (productId) => dispatch(removeFromCart(productId))
  }
};

export default connect(null, mapDispatchToProps)(CartItem);