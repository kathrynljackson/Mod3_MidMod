import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state ={
            name: '',
            date: '',
            time: '',
            number: '',
        }
    }



    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })  
    }
    
    makeReservation = (event) => {
        event.preventDefault();
        
        const newReservation = {
            id: Date.now(),
            ...this.state
        }

        this.props.addReservation(newReservation);
        this.clearAll();
    }

    clearAll = () => {
        this.setState( { 
            name: '',
            date: '',
            time: '',
            number: '',
        })
    }


    render() {
        return (
                <form className='user-input'>
                    <input onChange={event => this.handleChange(event)} type='text' name='name' value ={this.state.name} placeholder='Name'></input>
                    <input onChange={event => this.handleChange(event)} type='text' name='date' value ={this.state.date} placeholder='Date (mm/dd)'></input>
                    <input onChange={event => this.handleChange(event)} type='text' name='time' value ={this.state.time} placeholder='Time'></input>
                    <input onChange={event => this.handleChange(event)} type='text' name='number' value ={this.state.number} placeholder='Number of Guests'></input>
                    <button className='make-reservation-button button' onClick={event => this.makeReservation(event)}>Make Reservation</button>
                </form>
        )
    }
}

export default Form;

