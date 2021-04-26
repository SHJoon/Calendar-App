import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import moment from "moment";
import axios from "axios";

const EditEvent = (props) => {
  // const [title, setTitle] = useState(props.selectedEvent?.title);
  // const [startDate, setStartDate] = useState(props.selectedEvent?.start.toISOString().substring(0, 10));
  // const [endDate, setEndDate] = useState(props.selectedEvent?.end.toISOString().substring(0, 10));
  const [errors, setErrors] = useState(null);

  const handleChange = (data, key) => {
    if (key === "title") {
      var copiedData = { ...props.selectedEvent, title: data };
    } else if (key === "start") {
      copiedData = { ...props.selectedEvent, start: data };
    } else {
      copiedData = { ...props.selectedEvent, end: data };
    }

    props.setSelectedEvent(copiedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    // console.log(title);
    // console.log(startDate);
    // console.log(endDate);
    // setStartDate(moment(props.selectedEvent.start).format('l'));

    console.log(moment(props.selectedEvent.start).format("l"));
    // const formData = {
    //   title,
    //   start: startDate,
    //   end: endDate,
    // };

    // axios
    //   .put(
    //     `http://localhost:8000/api/events/${props.selectedEvent.id}`,
    //     formData
    //   )
    //   .then((res) => {
    //     props.setOpen(false);
    //   })
    //   .catch((err) => {
    //     setErrors(err.response.data.errors);
    //   });
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={(e) => props.setOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <h2 id="create-title">Create new event</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="event-title">Title: </label>
              <input
                type="text"
                id="event-title"
                onChange={(e) => handleChange(e.target.value, "title")}
                value={props.selectedEvent.title}
              />
              {errors?.title && (
                <p style={{ color: "red" }}>{errors.title?.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="event-title">Start: </label>
              <input
                type="date"
                id="event-title"
                onChange={(e) => handleChange(e.target.value, "start")}
                value={moment(props.selectedEvent.start).format("YYYY-MM-DD")}
              />
              {errors?.start && (
                <p style={{ color: "red" }}>{errors.start?.message}</p>
              )}
            </div>
            <div>
              <label htmlFor="event-title">End: </label>
              <input
                type="date"
                id="event-title"
                onChange={(e) => handleChange(e.target.value, "end")}
                value={moment(props.selectedEvent.end).format("YYYY-MM-DD")}
              />
              {errors?.end && (
                <p style={{ color: "red" }}>{errors.end?.message}</p>
              )}
            </div>
            <button>Edit Event</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditEvent;
