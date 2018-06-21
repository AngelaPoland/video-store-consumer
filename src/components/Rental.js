import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cust from './Customer.js'
import axios from 'axios';
class Rental extends Component {
  constructor() {
    super();
    this.state = {
      success: '',
      error: ''
    };
  }
addRental = () => {
  let time = new Date();

  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let day = time.getDate()
  let rentalDate = `${year}-${month}-${day + 7}`;
  let movie = this.props.movieName;
  // console.log('checelkdjflskdjflskjd')
  // console.log(this.props.customer.rentals)

  axios.post( `http://localhost:3000/rentals/${movie}/check-out?customer_id=${this.props.customer.id}&due_date=${rentalDate}`)
    .then((response) => {
      this.setState({
        success: `Success: ${movie} has been checked out and is due on ${rentalDate}.`
      })
    })
    .catch((error) => {
      this.setState({
        error:error.message
      })
    });
}

 
onFormSubmit = (event) => {
  event.preventDefault();
  this.addRental();
}

  render(){
    return(
      <div>
      <h4>{this.state.error}</h4>
      <h4>{this.state.success}</h4>
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
      </div>
    )
  }
}

Rental.propTypes = {
  customer: PropTypes.string,
  movieName: PropTypes.string.isRequired
}
export default Rental;
