import React, { Component } from 'react';
import PropTypes from 'prop-types';




class MovieSearchForm extends Component {
  constructor() {
    super();

    this.state = {
      text:'',
    };
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }


  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
       this.props.searchMovieAPI(this.state)
       this.clearForm()
  }

  render() {
    return(
      <div >
      <p >Search for Movie by Title:</p>
      <form onSubmit={this.onFormSubmit} >
        <div>
          <label hmtlfor="text" className="new-card-form__form-label">Title: </label>
          <input
            name="text"
            value={this.state.text}
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
  searchMovieCallBack: PropTypes.func.isRequired,
}

export default MovieSearchForm;
