import React, { useEffect, useRef, useState } from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const times = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '12:00 - 14:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
  '18:00 - 20:00',
];


const pickSlotTimes = times => {
  // Get a random number that will indicate how many time slots we pick
  const timesToPick = (0, times.length);

  // If the random picked is the maximum possible then return all times
  if (timesToPick === times.length - 1) {
    return times;
  }

  let timesPicked = [];

  // Loop until we have picked specified number of times
  while (timesToPick !== timesPicked.length - 1) {
    // Get a new index and time
    const index = (0, times.length);
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

const Booking = props => {
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [bookingTimes, setBookingTimes] = useState([]);
  const timeSlotCacheRef = useRef(new Map());

  useEffect(() => {
    // Bail out if there is no date selected
    if (!bookingDate) return;

    // Get time slots from cache
    let newBookingTimes = timeSlotCacheRef.current.get(
      bookingDate.toDateString()
    );
    // If we have no cached time slots then pick new ones
    if (!newBookingTimes) {
      newBookingTimes = pickSlotTimes(times);
      // Update cache with new time slots for the selected date
      timeSlotCacheRef.current.set(bookingDate.toDateString(), newBookingTimes);
    }

    setBookingTimes(newBookingTimes);
  }, [bookingDate]);

  const onDateChange = e => {
    setSelectedTimeSlot(null);
    setBookingDate(e.value);
  };

  return (
    <div className="k-my-8">
      <div className="k-mb-4 k-font-weight-bold">Book driving slot</div>
      <p>{pickSlotTimes(times)}</p>
      <div className="k-my-8">
        <Calendar value={bookingDate} onChange={onDateChange} />
        <div className="k-my-8">
          <p>{bookingTimes}</p>
          {bookingTimes.map(time => {
            //didnt enter here
            return (

              < button
                key={time}
                className="k-my-8"
                onClick={e => setSelectedTimeSlot(time)}
              >
                {time}

              </button>
            );
          })}
        </div>
      </div>

      {
        bookingDate && selectedTimeSlot ? (
          <div>
            Selected slot: {bookingDate.toDateString()} at {selectedTimeSlot}
          </div>
        ) : null
      }
    </div >
  );
};

export default Booking;
