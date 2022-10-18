import { useState } from 'react';
import Calendar from 'react-calendar';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ScheduleMeeting } from "react-schedule-meeting";
import Time from 'react-time';
function notify() {
  fetch('https://textbelt.com/text', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      phone: '6479976478',
      message: 'test phone message',
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

const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
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
        17,
        0,
        0,
        0
      )
    )
  };
});

export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Time());
  return (

    <div className="Booking">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={120}
        availableTimeslots={availableTimeslots}
        onSelectedDayChange={date, time}
        onStartTimeSelect={console.log}
        onChange={setDate, setTime}
        value={date, time}
      />
      <p className='text-center'>
        <span className='bold'>Selected:</span>
        <br></br>
        {date.toDateString()}
        <br></br>

        <br></br>
        <button
          onClick={notify()}>
          SUBMIT
        </button>
      </p>

    </div >
  );
}
