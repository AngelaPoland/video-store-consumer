import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Customer from './components/Customer.js'
import CustList from './components/CustomerList.js'
import LibraryList from './components/LibraryList.js'
import MovieSearch from './components/MovieSearch.js'
import logo from './logo.svg';
import Rental from './components/Rental.js'
import MovieRentalButton from './components/MovieRentalButton.js';
import './App.css';

class App extends Component {
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

    const home = () => {
      return (<p>Welcome to Selam and Angela's video rental store!</p>);
    };

    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <p>
      //     <Rental
      //       customer={this.state.selectedCustomer}
      //       movieName={this.state.selectedMovie}
      //     />
      //   </p>
      //   <p>
      //   <MovieSearch />
      //   <CustList
      //     appCustomer={this.appLevelcustomer}
      //   />
      //
      //   <LibraryList
      //     appMovie={this.appLevelmovie}
      //   />
      //   </p>
      //
      // </div>
      <Router>
      <section>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/search">Search the Database</Link></li>
      <li><Link to="/library">Rental Library</Link></li>
      <li><Link to="/customers">Customers</Link></li>
      <li><Rental
        customer={this.state.selectedCustomer}
        movieName={this.state.selectedMovie}
      /></li>
      </ul>

      <hr/>

      <Route exact path="/" component={home}/>
      <Route path="/search" component={MovieSearch}/>
      <Route path="/library"
      render={(props) => <LibraryList {...props} appMovie={this.appLevelmovie} />}
      />
      <Route path="/customers"
      render={(props) => <CustList {...props} appCustomer={this.appLevelcustomer} />}
      />
      </section>
      </Router>
    );
  }
}

export default App;
