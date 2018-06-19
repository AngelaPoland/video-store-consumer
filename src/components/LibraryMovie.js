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
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt="movie image" />
        <p>Release Date: {this.props.release_date}</p>
        <p>Overview:</p>
        <p>Overview: {this.props.overview}</p>

        <button className="add-movie" onClick={this.addMovie}>Add to Rental</button>
      </div>
      )
    }
  }

  LibraryMovie.propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    id: PropTypes.number.isRequired,
  };

  export default LibraryMovie;
