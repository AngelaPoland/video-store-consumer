import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LibraryMovie.css';

class LibraryMovie extends Component {

  addMovie = (event) => {
      console.log(event.target.id);
      event.preventDefault();
      this.props.addMovieToRental(this.props.id);
    }

  render() {
    console.log('Rendering a movie')
    return (
      <div className="movie">
        <p>I am a movie</p>
        <button className="add-movie" onClick={this.addMovie}>Add to Rental</button>
      </div>
      )
    }
  }

  Card.propTypes = {
    text: PropTypes.string.isRequired,
    image_url: PropTypes.string,

    id: PropTypes.number.isRequired,
  };

  export default LibraryMovie;
