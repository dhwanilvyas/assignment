import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotal, getTotalDiscount, getTypeDiscount } from './reducer';

class BillCard extends Component {
  render() {
    return (
      <div className='panel panel-default'>
        <div className='panel-body'>
          <h5>Total</h5>
          <h6>Items ({this.props.items.length}) : ${this.props.total}</h6>
          <h6>Discount: -${this.props.discount}</h6>
          <h6>Type discount: -${this.props.typeDiscount}</h6>
          <hr />
          <h6>Order total : ${this.props.total - (this.props.discount + this.props.typeDiscount)}</h6>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state,
    total: getTotal(state),
    discount: getTotalDiscount(state),
    typeDiscount: getTypeDiscount(state)
  };
}

export default connect(mapStateToProps, null)(BillCard);
