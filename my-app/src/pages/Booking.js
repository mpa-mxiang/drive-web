import { useState } from 'react';
import Calendar from 'react-calendar';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ScheduleMeeting } from "react-schedule-meeting";
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
  return (
    <div className="Bookingpp">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={120}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={console.log}
      />
      <p className='text-center'>
        <span className='bold'>Selected:</span>{' '}
      </p>
    </div>
  );
}
/*
function Booking() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar className='text-center' onChange={setDate} value={date} />

      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
export default Booking;
*/