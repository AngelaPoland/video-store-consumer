import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustRentButton from './CustomerRentalButton.js'
class Customer extends Component {
  //1. button for number of rentals in the Customer list
  // Method - onclick function that will be linked (reserve submit button). Will be linked to a method that increases the count of a specific customer. Function will modify state of a customer.

  constructor(){
    super();
    this.state = {
      numberOfrentals: 0,
    }
  }

  selectedCustomerfromButton = () =>{
    this.props.custTolist(this.props.name)
  }

  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>Number of rentals: {this.state.numberOfrentals}</p>
        <p>
            <CustRentButton
              rentalCustomer={this.props.name}
              selectedCustomer={this.selectedCustomerfromButton}
            />
      </p>
      </div>
    )
  }
}

Customer.propTypes = {
  name: PropTypes.string.isRequired
}

export default Customer;
