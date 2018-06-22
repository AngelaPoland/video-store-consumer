import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import StatusBar from './components/StatusBar';
import CustList from './components/CustomerList.js'
import LibraryList from './components/LibraryList.js'
import MovieSearch from './components/MovieSearch.js'
import Rental from './components/Rental.js'
import MovieRentalButton from './components/MovieRentalButton.js';
import Home from './components/Home.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedCustomer: '',
      selectedMovie:'',
      status: {
        message: '',
      }
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

  // thanks for the inspiration Dan!
  setStatus = (message, type) => {
    this.setState({
      status: { message, type }
    });
  }

  clearStatus = () => {
    this.setState({ status: { message: '' }})
  }


  render() {

    return (
      <Router>
        <section>
        <div>
          <StatusBar {...this.state.status} clearStatus={this.clearStatus} />
        </div>
        <ul className="nav-bar">
        <li className="home"><Link to="/"><img src="data:image/png;base64,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" alt="link to homepage" width="40" height="40" title="homepage"/></Link></li>
        <li><Link to="/search"><img src="data:image/png;base64,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" alt="link to database of movies" width="40" height="40" title="search movieDB"/></Link></li>
        <li><Link to="/library"><img src="https://png.icons8.com/metro/1600/library.png" alt="link to rental library" width="40" height="40" title="library"/></Link></li>
        <li><Link to="/customers"><img src="https://image.freepik.com/free-icon/crowd-of-users_318-50125.jpg" alt="link to Customers" width="40" height="40" title="customers"/></Link></li>
        </ul>
        <hr/>
        <section className="bodyOfsite">
          <div>
          <Rental
            customer={this.state.selectedCustomer}
            movie={this.state.selectedMovie}
            setStatus={this.setStatus}
          />
          </div>

        <Route exact path="/" component={Home}/>
        <Route path="/search"
          render={(props) => <MovieSearch {...props} setStatus={this.setStatus} />}
          />
        <Route path="/library"
        render={(props) => <LibraryList {...props} appMovie={this.appLevelmovie} setStatus={this.setStatus} />}
        />

        <Route path="/customers"
        render={(props) => <CustList {...props} appCustomer={this.appLevelcustomer} setStatus={this.setStatus} />}
        />
        </section>
        </section>

      </Router>
    );
  }
}

export default App;
