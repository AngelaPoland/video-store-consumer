import React, { Component } from 'react';
import PropTypes from 'prop-types';




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
      <p><strong>Search for Movie by Title:</strong></p>
      <form onSubmit={this.onFormSubmit} >
        <div>
          <label hmtlfor="text">Title: </label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.onFieldChange}
            type="text"
            />
        </div>
        <div>
        <input type="submit" value="Search" />
        </div>
      </form>
      </div>
    );
  }

}

MovieSearchForm.propTypes = {
  searchForMovie: PropTypes.func.isRequired,
}

export default MovieSearchForm;
