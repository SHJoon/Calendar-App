import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CreateEvent from './CreateEvent';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[{
          start: moment().toDate(),
          end: moment().add(1, "days").toDate(),
          title: "Some title"
        }]}
        startAccessor="start"
        endAccessor="end"
        style={{height:"100vh"}}
      />
      <CreateEvent open={open} setOpen={setOpen} />
    </div>
  );
};

export default MyCalendar;
