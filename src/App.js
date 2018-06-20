import React, { Component } from 'react';
import Customer from './components/Customer.js'
import CustList from './components/CustomerList.js'
import LibraryList from './components/LibraryList.js'
import MovieSearch from './components/MovieSearch.js'
import logo from './logo.svg';
import Rental from './components/Rental.js'
import MovieRentalButton from './components/MovieRentalButton.js';
import './App.css';

class App extends Component {
  // App needs to know which person has been selectedCustomer//
  //pass that name down to the Rental .js file

  //have the state of the customer and the movie
  //updated by the individual components
  //pass the values into the lower level components as
  //props.
  constructor(){
    super();
    this.state = {
      selectedCustomer: '',
      selectedMovie:''
    }
  }

  appLevelcustomer = (aCustomer) =>{
    this.setState({
      selectedCustomer: aCustomer
    })
  }


appLevelmovie = (aMovie) =>{
  this.setState({
    selectedMovie: aMovie
  })
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <Rental
            customer={this.state.selectedCustomer}
            movieName={this.state.selectedMovie}
          />
        </p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
        <MovieSearch />
        <CustList
          appCustomer={this.appLevelcustomer}
        />

        <LibraryList
          appMovie={this.appLevelmovie}
        />
        </p>

      </div>
    );
  }
}

export default App;
