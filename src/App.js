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
    console.log('afasdfasdf')
    console.log(aCustomer)
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

    // const home = () => {
    //   return (
    //     <div>
    //       <p>Welcome to Selam and Angelas video rental store!</p>
    //       <iframe src="https://giphy.com/embed/26DMYEDmjttF46vV6" width="382" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/stickers/vintage-3d-26DMYEDmjttF46vV6"></a></p>
    //     </div>
    //   );
    // };

    return (
      <Router>
        <section>
          <ul className="nav-bar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search the Database</Link></li>
            <li><Link to="/library">Rental Library</Link></li>
            <li><Link to="/customers">Customers</Link></li>
          </ul>
          <hr/>
          <div>
            <Rental
              customer={this.state.selectedCustomer}
              movie={this.state.selectedMovie}
              setStatus={this.setStatus}
              />
          </div>
          <div>
            <StatusBar {...this.state.status} clearStatus={this.clearStatus} />
          </div>
          <div className="router">
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
          </div>
          
        </section>

      </Router>
    );
  }
}

export default App;
