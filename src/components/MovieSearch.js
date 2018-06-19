import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Movie from './Movie.js'
import MovieSearchForm from './MovieSearchForm.js'

class MovieSearch extends Component {

constructor(){
  super();
  this.state = {
    movies:[]
  }
}

searchMovieAPI = (title) => {
  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=c880315e20c6b7ec240bbd68aff8f201&query=${title}`)
    .then( (response) => {
      // console.log(response.data)
      this.setState({
        movies: response.data.results
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
      poster_path={movie.poster_path}
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
          <MovieSearchForm searchMovieAPI={this.searchMovieAPI} />
          {this.movieSearchShow()}
        </div>
      )
  }
}


export default MovieSearch;
