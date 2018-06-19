import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomerRentalButton extends Component {

//onclick - pass into parent function


  render(){
    return(
      <button onClick={this.props.selectedCustomer}>
        Select for Rental
      </button>
    )
  }
}



CustomerRentalButton.propTypes ={
  rentalCustomer:PropTypes.string.isRequired
}


export default CustomerRentalButton;
