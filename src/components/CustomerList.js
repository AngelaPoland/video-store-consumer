import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Customer from './Customer.js'

class CustomerList extends Component {

constructor(){
  super();
  this.state = {
    customers:[]
  }
}

componentDidMount = () => {
  axios.get('http://localhost:3000/customers')
    .then( (response) => {
      // console.log(response.data)
      this.setState({
        customers: response.data
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
}

customerList = () => {
  console.log('Pulling list of customers')
  const customerList = this.state.customers.map((aCustomer, index) => {
  return (
    <Customer
      key={index}
      name={aCustomer.name}
    />
  );
});
  return customerList;
}

  render() {
      return(
        <div>
          {this.customerList()}
        </div>
      )
  }
}


export default CustomerList;
