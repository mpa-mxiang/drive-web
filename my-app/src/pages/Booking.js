import * as React from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import validator from 'validator';

const availableTimeslots = [0, 1, 2, 3, 4, 5].map(id => {
  return {
    id,
    startTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        9,
        0,
        0,
        0
      )
    ),
    endTime: new Date(
      new Date(new Date().setDate(new Date().getDate() + id)).setHours(
        22,
        0,
        0,
        0
      )
    ),
  };
});
function validate(name, number, pkg, g1) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Name can't be empty");
  }
  if (!validator.isAlpha(name)) {
    errors.push('Please enter a valid name');
  }
  if (number.length === 0) {
    errors.push("Number can't be empty");
  }
  if (!validator.isNumeric(number)) {
    errors.push('Please enter a valid number');
  }
  if (pkg === undefined || !(pkg === 'Bronze' || pkg === 'Sliver')) {
    errors.push('Please choose a package');
  }
  if (g1 === undefined || !(g1 === 'Yes' || g1 === 'No')) {
    errors.push('Please choose if you pass the G1 test');
  }
  if (g1 === 'No') {
    errors.push('Please pass G1 first');
  }

  return errors;
}

export default class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      number: '',
      pkg: '',
      g1: '',
      date: '',

      errors: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { name, number, pkg, g1 } = this.state;

    const errors = validate(name, number, [pkg, g1]);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // submit the data...
  }

  render() {
    const { errors } = this.state;
    <button
      onClick={() => this.setState({ count: this.state.count + 1 })}
    ></button>;
    return (
      <div className="Booking">
        <ScheduleMeeting
          borderRadius={10}
          primaryColor="#3f5b85"
          eventDurationInMinutes={120}
          eventStartTimeSpreadInMinutes={0}
          availableTimeslots={availableTimeslots}
          /*onStartTimeSelect={() => this.setState({
            date: this.state.date === `Time selected: ${format(date.startTime, 'cccc, LLLL do h:mm a')}`
          }
          }
          */
          onNoFutureTimesAvailable={console.log}
        />
        <p>Selected:</p>
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                value={this.state.name}
                onChange={evt => this.setState({ name: evt.target.value })}
                type="text"
                placeholder="Name"
              />
            </label>
            <label>
              Phone Number:
              <input
                value={this.state.number}
                onChange={evt => this.setState({ number: evt.target.value })}
                type="text"
                placeholder="Phone number"
              />
            </label>

            <p>Choose your package:</p>
            <div className="center">
              <br></br>
              <input
                value={this.state.pkg}
                onChange={evt => this.setState({ pkg: evt.target.value })}
                type="radio"
                placeholder="Pkg"
                id="Bronze"
                name="Bronze"
              />
              <span>Bronze</span>
              <input
                value={this.state.pkg}
                onChange={evt => this.setState({ pkg: evt.target.value })}
                type="radio"
                placeholder="Pkg"
                id="Sliver"
                name="Sliver"
              />
              <span>Sliver</span>
            </div>

            <p>Did you pass G1?</p>
            <div className="center">
              <input
                value={this.state.pkg}
                onChange={evt => this.setState({ pkg: evt.target.value })}
                type="radio"
                placeholder="g1"
                id="Yes"
                name="Yes"
              />
              <span>Yes</span>
              <input
                value={this.state.pkg}
                onChange={evt => this.setState({ pkg: evt.target.value })}
                type="radio"
                placeholder="g1"
                id="No"
                name="No"
              />
              <span>No</span>
            </div>
            <div className="center">
              <button type="submit" onClick>
                Submit
              </button>
              {errors.map(error => (
                <p key={error}>Error: {error}</p>
              ))}
            </div>
          </form>
        </div>
        <br></br>
      </div>
    );
  }
}
