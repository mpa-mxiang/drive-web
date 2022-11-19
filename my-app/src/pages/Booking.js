import * as React from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import validator from 'validator';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';

const breadcrumbs = [
  <Link underline="hover" key="1" color="inherit" href="/">
    Home
  </Link>,
  <Link underline="hover" key="2" color="inherit" href="/about">
    Booking
  </Link>,
];

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
function validate(name, number, pkg, g1, date) {
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
  if (!validator.isNumeric(number) && number.length < 10) {
    errors.push('Please enter a valid number');
  }
  if (pkg.length === 0) {
    errors.push('Please choose a package');
  }
  if (g1.length === 0) {
    errors.push('Please choose if you pass the G1 test');
  }
  if (g1 === 'No') {
    errors.push('Please pass G1 first');
  }
  if (date.length === 0) {
    errors.push('Please enter a valid date');
  }

  return errors;
}
function notify(name, number, thisMessage, date) {
  fetch('https://textbelt.com/text', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '6479976478',
      message: thisMessage + date,
      key: 'textbelt',
    }),
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
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

    const { name, number, pkg, g1, date } = this.state;
    const errors = validate(name, number, pkg, g1, date);
    if (errors.length > 0) {
      this.setState({ errors });
      <p key={errors}>Error: {errors}</p>;
    }
    // submit the data...
    else {
      notify(
        name,
        number,
        'This is the confirmation for your booking on ',
        date
      );
    }
    return;
  }

  handleDate = startTimeEventEmit => {
    this.setState({
      date: format(startTimeEventEmit.startTime, 'cccc, LLLL do h:mm a'),
    });
    return;
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="p-4 text-center">
        <Stack>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <div className="Booking">
          <ScheduleMeeting
            borderRadius={10}
            primaryColor="#3f5b85"
            eventDurationInMinutes={120}
            eventStartTimeSpreadInMinutes={0}
            availableTimeslots={availableTimeslots}
            onStartTimeSelect={this.handleDate}
            onNoFutureTimesAvailable={console.log}
          />
          <div className="center">
            <form onSubmit={this.handleSubmit}>
              <div className="center">
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
                    onChange={evt =>
                      this.setState({ number: evt.target.value })
                    }
                    type="text"
                    placeholder="Phone number"
                  />
                </label>
              </div>
              <p>Did you pass G1?</p>
              <div
                className="center"
                onChange={evt => this.setState({ g1: evt.target.value })}
              >
                <input
                  value="Yes"
                  onChange={evt => this.setState({ g1: evt.target.value })}
                  type="radio"
                  placeholder="g1"
                  id="Yes"
                  name="Yes"
                  checked={this.state.g1 === 'Yes'}
                />
                Yes
                <input
                  value="No"
                  onChange={evt => this.setState({ g1: evt.target.value })}
                  type="radio"
                  placeholder="g1"
                  id="No"
                  name="No"
                  checked={this.state.g1 === 'No'}
                />
                No
              </div>
              <p>Choose your package:</p>

              <div
                className="center"
                onChange={evt => this.setState({ pkg: evt.target.value })}
              >
                <br></br>
                <input
                  value="Bronze"
                  type="radio"
                  placeholder="Pkg"
                  id="Bronze"
                  name="Bronze"
                  checked={this.state.pkg === 'Bronze'}
                />
                Bronze
                <input
                  value="Sliver"
                  type="radio"
                  placeholder="Pkg"
                  id="Sliver"
                  name="Sliver"
                  checked={this.state.pkg === 'Sliver'}
                />
                Sliver
              </div>

              <p>Info confirmation:</p>
              <p>
                Your name is {this.state.name}, your number is{' '}
                {this.state.number}, you selected {this.state.date} with{' '}
                {this.state.pkg}
              </p>
              <div className="center">
                <button type="submit" onClick={this.handleSubmit}>
                  Submit
                </button>
              </div>
              {errors.map(error => (
                <p key={error}>Error: {error}</p>
              ))}
            </form>
          </div>
          <br></br>
        </div>
      </div>
    );
  }
}
