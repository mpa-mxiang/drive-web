import { useState } from 'react';
import Calendar from 'react-calendar';
import './Booking.css';

function Booking() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
      <h1 className='text-center'>React Calendar</h1>
      <div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          nextLabel='month>>'
          nextAriaLabel='Go to next month'
          next2Label='year>>'
          next2AriaLabel='Go to next year'
          prevLabel='<<month'
          prevAriaLabel='Go to prev month'
          prev2Label='<<year'
          prev2AriaLabel='Go to prev year'
        />
      </div>
      <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
    </div>
  );
}
export default Booking;