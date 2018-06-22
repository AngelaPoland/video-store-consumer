import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import LibraryMovie from './LibraryMovie.js'
import Movie from './Movie.js'

class LibraryList extends Component {

constructor(){
  super();
  this.state = {
    movies:[]
  }
}

movieFromlibrary = (aMovie) => {
  this.props.appMovie(aMovie)
}

componentDidMount = () => {
  axios.get('http://localhost:3000/movies')
    .then( (response) => {
      this.props.setStatus(`Successfully loaded ${response.data.length} movies from the rental library`, 'success');
      this.setState({
        movies: response.data
      });
    } )
    .catch( (error) => {
      this.props.setStatus(`Failed to load movies: ${error.message}`, 'success');
      this.setState({
        error: error.message
      });
    } );
}

libraryList = () => {
  console.log('Pulling list of movies')
  const libraryList = this.state.movies.map((aMovie, index) => {
  return(
      <LibraryMovie
        key={index}
        title={aMovie.title}
        image_url={aMovie.image_url}
        release_date={aMovie.release_date}
        overview={aMovie.overview}
        rentalFun={this.movieFromlibrary}
      />
  );
});
  return libraryList;
}

moviesFromsearch = () => {
  const movies = this.state.movies.map((movie) =>{
    return(
      {title:movie.title, image: movie.image_url}
    )
  })
  return movies;
}
  render() {
      return(
        <div className="library-list">
          {this.libraryList()}
          <Movie addMovie={this.addMovieToLibrary}/>
        </div>
      )
  }
}

LibraryList.propTypes = {
  setStatus: PropTypes.func.isRequired,
  appMovie: PropTypes.func.isRequired,
}
export default LibraryList;
