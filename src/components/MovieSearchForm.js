import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MovieSearchForm.css';



class MovieSearchForm extends Component {
  constructor() {
    super();

    this.state = {
      title:'',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  valid = () => {
    return this.state.title.length > 0;
  }


  clearForm = () => {
    this.setState({
      title: '',
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (this.valid()) {
       this.props.searchForMovie(this.state.title)
       this.clearForm();
     }
  }

  render() {
    return(
      <div >
      <h3>Search for Movie by Title</h3>
      <form onSubmit={this.onFormSubmit} >
      <section className="search-movie-labels">
        <div>
          <input
            name="title"
            value={this.state.title}
            onChange={this.onFieldChange}
            type="text"
            />
        </div>
        <div>
        <input id="image" type="image" width="25" height="25" alt="Search"
         src="http://images.clipartpanda.com/magnifying-glass-book-clipart-magnifying-glass-clipart-hi.png"/>
        </div>
        </section>
      </form>
      </div>
    );
  }

}

MovieSearchForm.propTypes = {
  searchForMovie: PropTypes.func.isRequired,
}

export default MovieSearchForm;
