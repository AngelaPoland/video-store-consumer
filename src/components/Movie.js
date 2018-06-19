import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LibraryMovie.css';

class Movie extends Component {

  addMovieToLibrary = (event) => {
      console.log(event.target.id);
      event.preventDefault();
      this.props.addMovieToLibrary(this.props.id);
    }

  render() {
    console.log('Rendering a movie')
    console.log(this.props)
    return (
      <div className="movie">
        <h2>{this.props.name}</h2>
        <img src={this.props.image_url} />
        <p>Release Date: {this.props.release_date}</p>
        <p>Overview:</p>
        <p>Overview: {this.props.overview}</p>

        <button className="add-movie" onClick={this.addMovieToLibrary}>Add Movie to Library</button>
      </div>
      )
    }
  }

  Movie.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    id: PropTypes.number.isRequired,
    image_url: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    addMovieToLibrary: PropTypes.func.isRequired
  };

  export default Movie;
