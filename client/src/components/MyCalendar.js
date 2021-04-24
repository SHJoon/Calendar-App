import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[
          {
            start: moment().toDate(),
            end: moment().add(1, "days").toDate(),
            title: "Some title",
          },
        ]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "100vh" }}
        onSelectEvent={console.log("hello")}
      />
      <CreateEvent open={createOpen} setOpen={setCreateOpen} />
      <EditEvent open={editOpen} setOpen={setEditOpen} />
    </div>
  );
};

export default MyCalendar;
