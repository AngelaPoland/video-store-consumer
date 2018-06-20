import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// import './LibraryMovie.css';

class Movie extends Component {


    addMovieToLibrary = () => {
    const URL = `http://localhost:3000/movies/`
    axios.post(URL + `?title=${this.props.name}&release_date=${this.props.release_date}&image_url=${this.props.image_url}&overview=${this.props.overview}`)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
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
        <p>{this.props.overview}</p>

        <button onClick={this.addMovieToLibrary}>Add Movie to Library</button>
      </div>
      )
    }
  }

  Movie.propTypes = {
    name: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    addMovie: PropTypes.func.isRequired
  };

  export default Movie;
