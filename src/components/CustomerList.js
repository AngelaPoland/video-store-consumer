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
      this.setState({
        customers: response.data
      });
      console.log(response.data)
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
}

selectedCustomer = (anEvent) => {
    this.props.appCustomer(anEvent)
}


customerList = () => {
  console.log('Pulling list of customers')
  const customerList = this.state.customers.map((aCustomer, index) => {
  return (
      <Customer
        key={index}
        name={aCustomer.name}
        rentals={aCustomer.movies_checked_out_count}
        id={aCustomer.id}
        address={aCustomer.address}
        postal={aCustomer.postal}
        city={aCustomer.city}
        phone={aCustomer.phone}
        custTolist={this.selectedCustomer}
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
