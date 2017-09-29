import React, { Component } from 'react';
import ItemTable from './ItemTable';
import BillCard from './BillCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <div className="row">
          <legend>Order Summary</legend>
          <div className="col-md-4 col-md-push-8">
            <BillCard />
          </div>
          <div className="col-md-8 col-md-pull-4">
            <ItemTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
