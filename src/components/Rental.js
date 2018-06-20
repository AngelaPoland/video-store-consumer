import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cust from './Customer.js'
import axios from 'axios';
class Rental extends Component {

addRental = () => {
  let time = new Date();

  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let rentalDate = `${year}-${month}-${day + 7}`;
  let movie = this.props.movieName;

  axios.post( `http://localhost:3000/rentals/${movie}/check-out?customer_id=${this.props.customer.id}&due_date=${rentalDate}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error.message);
    });
}


onFormSubmit = (event) => {
  event.preventDefault();
  this.addRental();
}

  render(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label htmlFor="customerName">Customer: </label>
          <input name="cust" value={this.props.customer.name} />
        </div>
        <div>
          <label htmlFor="movieName">Movie: </label>
          <input name="movie" value={this.props.movieName} />
        </div>
        <input type="submit" value="Checkout" />
      </form>
    )
  }
}

Rental.propTypes = {
  customer: PropTypes.string,
  movieName: PropTypes.string.isRequired
}
export default Rental;
