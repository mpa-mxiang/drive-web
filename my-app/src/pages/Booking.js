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
  const nameHandleChange = event => {
    setNames(event.target.value);
  };
  const numberHandleChange = event => {
    setNumber(event.target.value);
    isValid(validatePhoneNumber(event.target.value));
  };

  const validatePhoneNumber = (value) => {
    let isValidPhoneNumber = validator.isMobilePhone(value, "en-US");
    console.log(isValidPhoneNumber, value)
    return isValidPhoneNumber;
  };
  function notify(thisMessage) {
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: '6475463780',
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
        <form>
          <label marginleft="22">
            Name:
            <input type="text" id="names" name="typedName" onChange={nameHandleChange}
              value={names} />
          </label>
          <label marginleft="22">
            Phone Number:
            <input type="text" id="number" name="number" onChange={numberHandleChange}
              value={number} />
          </label>
          <input type="submit" value="Submit" />
        </form>


      </div>
      <p>Your name is {names}, your number is {number}.</p>
      <p>{isValid} Please enter a valid phone number</p>
    </div >
  );
}
