import React, { Component } from 'react';
import './Home.css';

class Home extends Component {


  render() {
    console.log('Rendering a movie')
    return (
      <div className="home" >
        <p><img src="https://i.imgur.com/cbKZZmu.png?1" alt="logo" className="center" /></p>
      </div>
      )
    }
  }



  export default Home;
