import { useState } from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Time from 'react-time';

export default function Booking() {
  function notify() {
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: '6479976478',
        message: `Time selected: ${format(
          startTimeEventEmit.startTime,
          'cccc, LLLL do h:mm a'
        )}`,
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
        eventStartTimeSpreadInMinutes={eventStartTimeSpreadInMinutes}
        eventStartTimeSpreadInMinutes={10}
        eventDurationInMinutes={10}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleTimeslotClicked}
        onNoFutureTimesAvailable={console.log}
      />
      onStartTimeSelect
    </div>
  );
}
