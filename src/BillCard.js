import React, { Component } from 'react';
import { connect } from 'react-redux';
import { restoreData } from './actions';
import { getTotal, getTotalDiscount, getTypeDiscount } from './reducer';
import './BillCard.css';

class BillCard extends Component {
  render() {
    return (
      <div>
        <div className='panel panel-default BillCard-container'>
          <div className='panel-body'>
            <h5>Total</h5>
            <hr />
            <h6>
              <span>Items ({this.props.items.length})</span>
              <span className='pull-right'> ${this.props.total}</span>
            </h6>
            <h6>
              <span>Discount</span>
              <span className='pull-right'> -${this.props.discount}</span>
            </h6>
            <h6>
              <span>Type Discount</span>
              <span className='pull-right'> -${this.props.typeDiscount}</span>
            </h6>
            <hr />
            <div>
              <h4>
                <span>Order total</span>
                <span className='pull-right'> ${this.props.total - (this.props.discount + this.props.typeDiscount)}</span>
              </h4>
            </div>
          </div>
        </div>
        {!this.props.items.length && 
          <button className='btn btn-info btn-block' onClick={() => this.props.dispatch(restoreData())}>Get all data back!</button>
        }
      </div>
    );
  }
}

function mapStateToProps({data}) {
  return {
    items: data,
    total: getTotal(data),
    discount: getTotalDiscount(data),
    typeDiscount: getTypeDiscount(data)
  };
}

export default connect(mapStateToProps, null)(BillCard);
