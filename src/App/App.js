import React, { Component } from 'react';
import './App.css';
import Reservation from '../Reservation/reservation.js';
import Form from '../Form/Form.js';
import { Route } from 'react-router-dom';
//import { fetchReservations } from '../fetch/fetch-requests.js';


class App extends Component {
  constructor() {
    super();
    this.state= {
      reservations: [],
    }
    this.addReservation = this.addReservation.bind(this)
  }



addReservation = (newReservation) => {
  this.setState({ reservations: [...this.state.reservations, newReservation] })
}

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <Route exact path ='/'>
            <Form addReservation={this.addReservation} />
            <Reservation reservations={this.state.reservations}/>
          </Route> 
        </div>
      </div>
    )
  }
}

export default App;
