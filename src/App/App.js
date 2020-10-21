import React, { Component } from 'react';
import './App.css';
import Reservation from '../Reservation/reservation.js';
import { Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Route exact path ='/'>
            <Reservation />
          </Route> 
        </div>
      </div>
    )
  }
}

export default App;
