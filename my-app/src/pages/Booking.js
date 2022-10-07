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


        class Booking extends React.Component {
          constructor(props) {
          super(props);
        let now = new Date();
        let start = moment(
        new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
        );
        let end = moment(start).add(1, 'days').subtract(1, 'seconds');
        this.state = {
          start: start,
        end: end,
    };

        this.applyCallback = this.applyCallback.bind(this);
  }

        applyCallback(startDate, endDate) {
          this.setState({
            start: startDate,
            end: endDate,
          });
  }

        render() {
          let now = new Date();
        let start = moment(
        new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0)
        );
        let end = moment(start).add(1, 'days').subtract(1, 'seconds');
        let ranges = {
          'Today Only': [moment(start), moment(end)],
        'Yesterday Only': [
        moment(start).subtract(1, 'days'),
        moment(end).subtract(1, 'days'),
        ],
        '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
    };
        let local = {
          format: 'DD-MM-YYYY HH:mm',
        sundayFirst: false,
    };
        let maxDate = moment(start).add(24, 'hour');
        return (
        <div>
          <DateTimeRangeContainer
            ranges={ranges}
            start={this.state.start}
            end={this.state.end}
            local={local}
            maxDate={maxDate}
            applyCallback={this.applyCallback}
          >
            <FormControl
              id="formControlsTextB"
              type="text"
              label="Text"
              placeholder="Enter text"
            />
          </DateTimeRangeContainer>
        </div>
        <p className='text-center'>
          <span className='bold'>Selected Date:</span>{' '}
          {date.toDateString()}
        </p>
      </div>
      );
}
      export default Booking;
