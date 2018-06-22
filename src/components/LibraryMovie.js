import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './LibraryMovie.css';
import MovieRentalButton from './MovieRentalButton.js'
import './LibraryMovie.css'
class LibraryMovie extends Component {

  addMovie = (event) => {
      console.log(event.target.id);
      event.preventDefault();
      this.props.addMovieToRental(this.props.id);
    }

    selectedCustomerfromButton = () =>{
      return this.props.rentalFun({id:this.props.id,title:this.props.title})
    }



  render() {
    console.log('Rendering a movie')
    return (
      <div className="movie">
        <h2>{this.props.title}</h2>
        <img src={this.props.image_url} alt="movie image" />
        <p>
          <MovieRentalButton selectedMovie={this.selectedCustomerfromButton}/>
        </p>
        <p><strong>Release Date: </strong>{this.props.release_date}</p>
        <p className="scroll">{this.props.overview}</p>
      </div>
      )
    }
  }

  LibraryMovie.propTypes = {
    title: PropTypes.string.isRequired,
    image_url: PropTypes.string,
    id: PropTypes.number.isRequired,
    release_date: PropTypes.string,
    overview: PropTypes.string,
    addMovieToRental: PropTypes.func.isRequired
  };

  export default LibraryMovie;
