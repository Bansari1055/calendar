// CalendarComponent.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <div className='header'>
      <h1>React Calendar</h1>
      </div>
      <div className='calendar-container'>
      <Calendar onChange={onChange} value={date} />
      <p>Selected date: {date.toDateString()}</p>
    </div>
    </div>
  );
};

export default CalendarComponent;
