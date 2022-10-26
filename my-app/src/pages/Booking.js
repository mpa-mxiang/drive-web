import { useState } from 'react';
import './Booking.css';
import { ScheduleMeeting } from 'react-schedule-meeting';
import { format } from 'date-fns';
import Card from 'react-bootstrap/Card';
import Time from 'react-time';

export default function Booking() {
  function notify(onStartTimeSelect) {
    fetch('https://textbelt.com/text', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: '6475463780',
        message: onStartTimeSelect,
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
    alert(
      `Time selected: ${format(
        startTimeEventEmit.startTime,
        'cccc, LLLL do h:mm a'
      )}`
    );
  };

  const [eventDurationInMinutes, setEventDurationInMinutes] = useState(30);
  const [eventStartTimeSpreadInMinutes, setEventStartTimeSpreadInMinutes] =
    useState(10);

  return (
    <div className="Booking">
      <ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventStartTimeSpreadInMinutes={eventStartTimeSpreadInMinutes}
        eventDurationInMinutes={eventDurationInMinutes}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={handleTimeslotClicked}
        onNoFutureTimesAvailable={console.log}
      />
      <button>SUBMIT</button>
    </div>
  );
}
