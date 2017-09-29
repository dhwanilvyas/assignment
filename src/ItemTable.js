import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItemFromCart } from './actions';

class ItemTable extends Component {
  render() {

    const { items } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Items ({items.length})</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => {
            return (
              <tr key={item.id}>
                <td>
                  {/* <img src={item.img_url} className="img-thumbnail" /> */}
                  <span>{item.name}</span>
                  <button className="btn btn-xs" onClick={() => this.props.dispatch(removeItemFromCart(item))}>X</button>
                </td>
                <td>
                  <button className="btn btn-xs" onClick={() => this.props.dispatch(decreaseQuantity(item))}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className="btn btn-xs" onClick={() => this.props.dispatch(increaseQuantity(item))}>+</button>
                </td>
                <td>${item.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state
  };
}

export default connect(mapStateToProps, null)(ItemTable);
