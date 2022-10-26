import { useState } from 'react';
import ReactDOM from 'react-dom';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';

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
      <br></br>
      <p>{date}</p>
      <br></br>
    </div>
  );
}
