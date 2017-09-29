import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItemFromCart } from './actions';
import './ItemTable.css';

class ItemTable extends Component {
  render() {

    const { items } = this.props;

    return (
      <table className="table table-striped">
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
                  <div className='panel panel-default'>
                    <div className='panel-body'>
                      <img src={item.img_url} className="img-thumbnail" width="30" height="30" />
                      <span>{item.name}</span>
                      <span className='pull-right'>
                        <button className="btn btn-sm" onClick={() => this.props.dispatch(removeItemFromCart(item))}>X</button>
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <button className="btn btn-sm" onClick={() => this.props.dispatch(decreaseQuantity(item))}>-</button>
                  <span className="ItemTable-span">{item.quantity}</span>
                  <button className="btn btn-sm" onClick={() => this.props.dispatch(increaseQuantity(item))}>+</button>
                </td>
                <td><span className='ItemTable-span'>${item.price}</span></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({data}) {
  return {
    items: data
  };
}

export default connect(mapStateToProps, null)(ItemTable);
