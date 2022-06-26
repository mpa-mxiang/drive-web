<<<<<<< HEAD
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

=======
import React, { useState } from "react";
function Calendar() {


    // calendar
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    return (

        <div className="container">
            <div className="app-wrapper">

                <Calendar onChange={onChange} value={date} />
                {date.toString()}


            </div>
        </div>
    );
}
>>>>>>> parent of 40c52f5... Update Calendar.js
export default Calendar;