import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import ItemTable from './ItemTable';
import BillCard from './BillCard';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      alertVisible: false
    };
  }

  render() {
    return (
      <div className="container App">
        <AlertContainer>
      		{
            this.state.alertVisible &&
            <Alert type="info" onDismiss={() => this.setState({alertVisible: !this.state.alertVisible})}>Item deleted successfully</Alert>
          }
      	</AlertContainer>
        <div className="row">
          <div className="col-md-4 col-md-push-8">
            <BillCard />
          </div>
          <div className="col-md-8 col-md-pull-4">
            <legend>Order Summary</legend>
            <ItemTable />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
