import React, { useState } from 'react';
import CalendarTemplate from 'availability-calendar-react';

function Calendar() {
    const [availability, setAvailability] = useState([])
    const Calendar = CalendarTemplate({
        availability,
        setAvailability
    })
    return (
        <div>
            <Calendar />
        </div>
    );
}

export default Calendar;