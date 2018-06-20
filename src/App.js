import React, { Component } from 'react';
import Customer from './components/Customer.js'
import CustList from './components/CustomerList.js'
import LibraryList from './components/LibraryList.js'
import MovieSearch from './components/MovieSearch.js'
import logo from './logo.svg';
import Rental from './components/Rental.js'
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






  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>
          <Rental
            customerName={this.state.selectedCustomer}
          />
        </p>
        <p>
        <MovieSearch />

        <CustList
          appCustomer={this.appLevelcustomer}
        />


        <LibraryList />
        </p>
      </div>
    );
  }
}

export default App;
