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
    console.log('COMPONENT DID MOUNT IS RUNNING')
    fetchReservations()
        //.then(data => this.setState({ reservations: data }))
        //.catch(error => console.log(error))
}

render() {
    return (
        <main>
            <section className='existing-reservations'>
                {this.state.reservations.map(reservation => {
                    return (
                        <section className='each-reservation'>
                        <p>{reservation.name}</p>
                        <p>{reservation.date}</p>
                        <p>{reservation.time}</p>
                        <p>{reservation.number}</p>
                        <button>Cancel</button>
                        </section>
                    )
                })}

            </section>
        </main>
    )
}

}

export default Reservation;