import { useState } from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Time from 'react-time';
export default function Booking() {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Time());


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
          17,
          0,
          0,
          0
        )
      ),
    };
  });

  const handleTimeslotClicked = startTimeEventEmit => {
    const message = `Time selected: ${format(
      startTimeEventEmit.startTime,
      'cccc, LLLL do h:mm a'
    )}`;
    alert(message);
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: '6475463780',
        message: message,
        key: 'textbelt',
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
      });
  };

  return (
    <div className="Booking">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={120}
        eventStartTimeSpreadInMinutes={10}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleTimeslotClicked}
        onNoFutureTimesAvailable={console.log}
        onSelectedDayChange={date}
        onStartTimeSelect={time}
        onChange={[setDate, setTime]}
        value={[date, time]}
      />
      <p className='text-center'>
        <span className='bold'>Selected:</span>
        <br></br>
        {date.toDateString()}
        <br></br>

        <br></br>

      </p>
    </div>

  );

}
