import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MovieRentalButton extends Component {

  render(){
    return(
      <button onClick={this.props.selectedMovie}>
        Select for Rental
      </button>
    )
  }
}



export default MovieRentalButton;
