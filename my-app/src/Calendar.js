import React, { useState } from "react";
function Calendar() {


    // calendar
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };
    <Calendar onChange={onChange} value={date} />
    return (
        <div className="container">
            <div className="app-wrapper">
                <h1>Calendar</h1>

                <Calendar onChange={onChange} value={date} />
                {date.toString()}
            </div>
        </div>
    );
}
export default Calendar;