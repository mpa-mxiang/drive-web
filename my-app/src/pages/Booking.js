import { useState } from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import validator from 'validator'
export default function Booking() {
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


  const [names, setNames] = useState('');
  const [number, setNumber] = useState('');
  const [valid, isValid] = useState('');
  const [pkg, setPackage] = useState('');
  const [g1, setG1] = useState('');

  const numberHandleChange = event => {

    isValid(validatePhoneNumber(event.target.value));
  };

  const validatePhoneNumber = (value) => {
    let isValidPhoneNumber = validator.isMobilePhone(value, "en-US");
    console.log(isValidPhoneNumber, value)
    return isValidPhoneNumber;
  };
  const handleChange = e => {
    const target = e.target;
    if (target.checked) {
      setNames(target.value);
      setNumber(target.value);
      setPackage(target.value);
      setG1(target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
  };
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

  const [date, setDate] = useState('');

  return (
    <div className="Booking">
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
            <input type="text" id="names" name="typedName" onChange={handleChange}
              value={names} />
          </label>
          <label>
            Phone Number:
            <input type="text" id="number" name="number" onChange={numberHandleChange, handleChange}
              value={number} />
          </label>
          <p>Choose your package:</p>
          <div className="center">
            <label>
              <input type="radio" value="Bronze" checked={pkg === 'Bronze'} onChange={handleChange} />
              <span>Bronze</span>
            </label>
            <label>
              <input type="radio" value="Sliver" checked={pkg === 'Sliver'} onChange={handleChange} />
              <span>Sliver</span>
            </label>
          </div>
          <p>Did you pass G1?</p>
          <div className="center">
            <label>
              <input type="radio" value="Yes" checked={g1 === 'Yes'} onChange={handleChange} />
              <span>Yes</span>
            </label>
            <label>
              <input type="radio" value="No" checked={pkg === 'No'} onChange={handleChange} />
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
