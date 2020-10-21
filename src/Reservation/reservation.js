import React from 'react';
import { Component } from 'react';
import { fetchReservations } from '../fetch/fetch-requests.js';

class Reservation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
        };
    }

componentDidMount() {
    fetchReservations()
        .then(data => this.setState({ reservations: data }))
        .catch(error => console.log(error))
}

render() {
    console.log(this.state.reservations)
    return (
        <main>
            <section className='existing-reservations'>
                {this.state.reservations.map((reservation, index) => {
                    return (
                        <section className='each-reservation' key={index}>
                        <h1>{reservation.name}</h1>
                        <h1>{reservation.date}</h1>
                        <h1>{reservation.time}</h1>
                        <h1>{reservation.number}</h1>
                        <button>Cancel</button>
                        </section>
                    )
                })
            }
            </section>
        </main>
    )
}

}

export default Reservation;