import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cust from './Customer.js'

class Rental extends Component {

  // clickedUser = (user) =>{
  //   this.setState(
  //     {userName:user}
  //   )
  // }
  //
  // clickedMovieName = (movie) =>{
  //   this.setState(
  //     {movieName:movie}
  //   )
  // }

  render(){
    return(
      <form>
        <div>
          <label htmlFor="customerName">Customer</label>
          <input name="cust" value={this.props.customerName} />
        </div>
        <div>

        </div>
      </form>
    )
  }
}

Rental.propTypes = {
  customerName: PropTypes.string.isRequired,
  movieName: PropTypes.string.isRequired
}
export default Rental;
