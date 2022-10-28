import { useState } from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import validator from 'validator'
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

  if (names.length === 0) {
    errors.push("Name can't be empty");
  }
  if (validator.isAlpha(names)) {
    errors.push("Please enter a valid name");
  }
  if (number.length === 0) {
    errors.push("Number can't be empty");
  }
  if (validator.isNumeric(number)) {
    errors.push("Please enter a valid number");
  }
  if (pkg === null) {
    errors.push("Please choose a package");
  }
  if (g1 === null) {
    errors.push("Please choose if you pass the G1 test");
  }

  if (g1 === 'No') {
    errors.push("Please pass G1 first");
  }


  return errors;
}
function notify(thisMessage) {
  fetch('https://textbelt.com/text', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '6479976478',
      message: thisMessage,
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
export default class Booking extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const [names, setNames] = useState('');
    const [number, setNumber] = useState('');
    const [pkg, setPackage] = useState('');
    const [g1, setG1] = useState('');
    const [date, setDate] = useState('');

    names = ReactDOM.findDOMNode(this._nameInput).value;
    number = ReactDOM.findDOMNode(this._numberInput).value;
    pkg = ReactDOM.findDOMNode(this._pkgInput).value;
    g1 = ReactDOM.findDOMNode(this._g1Input).value;
    const errors = validate(names, number, pkg, g1);
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }
    render() {
      const { errors } = this.state;
      return (
        <form onSubmit={this.handleSubmit}>
          {errors.map(error => (
            <p key={error}>Error: {error}</p>
          ))}
          <input
            ref={nameInput => (this._nameInput = nameInput)}
            type="text"
            placeholder="Name"
          />
          <input
            ref={emailInput => (this._numberInput = numberInput)}
            type="text"
            placeholder="number"
          />

          <button type="submit">Submit</button>
        </form>
      );
    };
  }

/*
  render()(
      const { errors } = this.state;
  return (
    <div className="Booking" >
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={120}
        eventStartTimeSpreadInMinutes={0}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={date => {
          setDate(
            `Time selected: ${format(date.startTime, 'cccc, LLLL do h:mm a')}`
          );
          //发信息给手机 uncomment下面那条code就行
          //notify(date);
        }}
        onNoFutureTimesAvailable={console.log}
      />
      <p>Selected:</p>
      <p>{date}</p>
      <div className="center">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" id="names" name="typedName"
              value={names} />
          </label>
          <label>
            Phone Number:
            <input type="text" id="number" name="number"
              value={number} />
          </label>
          <p>Choose your package:</p>
          <div className="center">
            <label>
              <input type="radio" value="Bronze" checked={pkg === 'Bronze'} />
              <span>Bronze</span>
            </label>
            <label>
              <input type="radio" value="Sliver" checked={pkg === 'Sliver'} />
              <span>Sliver</span>
            </label>
          </div>
          <p>Did you pass G1?</p>
          <div className="center">
            <label>
              <input type="radio" value="Yes" checked={g1 === 'Yes'} />
              <span>Yes</span>
            </label>
            <label>
              <input type="radio" value="No" checked={pkg === 'No'} />
              <span>No</span>
            </label>
          </div>
        </form>

      </div>
      <p>Your name is {names}, your number is {number}.</p>
      <div className="center">
        <button type="submit">Submit</button>
      </div>

    </div >
  );
}
*/
