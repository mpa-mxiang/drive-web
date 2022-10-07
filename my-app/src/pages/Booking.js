import { useState } from 'react';
import Calendar from 'react-calendar';
import './Booking.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Time from './Time.js'
function Booking() {
  const [date, setDate] = useState(new Date());
  const times = [
    "08:00 - 10:00",
    "10:00 - 12:00",
    "12:00 - 14:00",
    "14:00 - 16:00",
    "16:00 - 18:00",
    "18:00 - 20:00",
  ];

  // Loop until we have picked specified number of times
  while (timesToPick !== timesPicked.length - 1) {
    // Get a new index and time
    const index = getRandomNumInRange(0, times.length);
    const selectedTime = times[index];
    // If we already picked that time we continue
    // as we don't want duplicated
    if (timesPicked.includes(selectedTime)) continue;
    // Keep the time
    timesPicked.push(selectedTime);
  }

  // We need to sort the times, as they may not be in a correct order
  return timesPicked.sort();
};

return (
  <div className='app'>
    <h1 className='text-center'>React Calendar</h1>
    <div className='calendar-container'>
      <Calendar onChange={setDate} value={date} />

    </div>
    <p className='text-center'>
      <span className='bold'>Selected Date:</span>{' '}
      {date.toDateString()}
    </p>
  </div>
);
}
export default Booking;