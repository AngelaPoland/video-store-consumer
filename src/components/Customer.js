import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustRentButton from './CustomerRentalButton.js'
class Customer extends Component {
  //1. button for number of rentals in the Customer list
  // Method - onclick function that will be linked (reserve submit button). Will be linked to a method that increases the count of a specific customer. Function will modify state of a customer.

  selectedCustomerfromButton = () =>{
    this.props.custTolist({name:this.props.name, rentals: this.props.rentals, id: this.props.id})
  }



  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <p>{this.props.address}</p>
        <p>{this.props.city}</p>
        <p>{this.props.postal}</p>
        <p>{this.props.phone}</p>
        <p>Number of rentals: {this.props.rentals}</p>
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
  name: PropTypes.string.isRequired,
  rentals: PropTypes.number,
  id: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
  postal: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default Customer;
