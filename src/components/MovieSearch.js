import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie.js'
import MovieSearchForm from './MovieSearchForm.js'

class MovieSearch extends Component {

constructor(props) {
  super(props);
  this.state = {
    movies:[]
  }
}

searchMovieAPI = (title) => {
  axios.get(`http://localhost:3000/movies?query=${ title }`)
    .then( (response) => {
      console.log(response)
      this.setState({
        movies: response.data,
        message: `Found ${response.data.length} results for "${title}" `
      });
    } )
    .catch( (error) => {
      console.log("got to the error");
      console.log(error);
      this.setState({
        error: error.message
      });
    } );
}

movieSearchShow = () => {
  console.log('Pulling list of customers')
  const movieList = this.state.movies.map((movie, index) => {
  return (
    <Movie
      key={index}
      name={movie.title}
      image_url={movie.image_url}
      release_date={movie.release_date}
      overview={movie.overview}
    />
  );
});
return movieList
}

  render() {
      return(
        <div>
          <MovieSearchForm searchForMovie={this.searchMovieAPI} />
          <p>{this.state.error}</p>
          <p>{this.state.message}</p>
          {this.movieSearchShow()}
        </div>
      )
  }
}


export default MovieSearch;
