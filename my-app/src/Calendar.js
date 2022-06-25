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
export default Calendar;