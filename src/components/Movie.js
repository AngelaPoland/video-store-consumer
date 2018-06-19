import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LibraryMovie.css';

class LibraryMovie extends Component {

  addMovieToLibrary = (event) => {
      console.log(event.target.id);
      event.preventDefault();
      this.props.addMovieToLibrary(this.props.id);
    }

  render() {
    console.log('Rendering a movie')
    return (
      <div className="movie">
        <h2>{this.props.title}</h2>
        <img src={this.props.poster_path} alt="movie image" />
        <p>Release Date: {this.props.release_date}</p>
        <p>Overview:</p>
        <p>Overview: {this.props.overview}</p>

        <button className="add-movie" onClick={this.addMovieToLibrary}>Add Movie to Library</button>
      </div>
      )
    }
  }

  LibraryMovie.propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    addMovieToLibrary: PropTypes.func.isRequired
  };

  export default LibraryMovie;
