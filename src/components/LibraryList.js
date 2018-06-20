import React, { Component } from 'react';
import axios from 'axios';
import LibraryMovie from './LibraryMovie.js'
import Movie from './Movie.js'

class LibraryList extends Component {

constructor(){
  super();
  this.state = {
    movies:[]
  }
}

componentDidMount = () => {
  axios.get('http://localhost:3000/movies')
    .then( (response) => {
      // console.log(response.data)
      this.setState({
        movies: response.data
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

libraryList = () => {
  console.log('Pulling list of movies')
  const libraryList = this.state.movies.map((aMovie, index) => {
  return (
      <LibraryMovie
        key={index}
        title={aMovie.title}
        image_url={aMovie.image_url}
        release_date={aMovie.release_date}
        overview={aMovie.overview}
      />

  );
});
  return libraryList;
}

  render() {
      return(
        <div>
          {this.libraryList()}
          <Movie addMovie={this.addMovieToLibrary}/>
        </div>
      )
  }
}


export default LibraryList;
