import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import axios from "axios";

import "react-big-calendar/lib/css/react-big-calendar.css";

import CreateEvent from "./CreateEvent";
import EditEvent from "./EditEvent";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/events`)
      .then((res) => {
        setAllEvents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleClickEvent = (event, e) => {
    e.preventDefault();

    console.log(event);
    setSelectedEvent(event);
    setEditOpen(true);
  };

  return (
    <div>
      <button onClick={(e) => setCreateOpen(true)}>Create new event</button>
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
        style={{ height: "80vh", width: "80vw" }}
        onSelectEvent={(event, e) => handleClickEvent(event, e)}
      />
      <CreateEvent open={createOpen} setOpen={setCreateOpen} />
      <EditEvent
        open={editOpen}
        setOpen={setEditOpen}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default MyCalendar;
