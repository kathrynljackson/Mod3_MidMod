import React from 'react';
import { Component } from 'react';
import { fetchReservations } from '../fetch/fetch-requests.js';

class Reservation extends Component {
    constructor() {
        super();
        this.state = {
            reservations: [],
        }
    }

componentDidMount() {
    console.log('COMPONENT DID MOUNT IS RUNNING')
    fetchReservations()
        .then(data => this.setState({ reservations: data }))
        .catch(error => console.log(error))
}

render() {
    return (
        <main>
            <section>

            </section>
        </main>
    )
}

}

export default Reservation;