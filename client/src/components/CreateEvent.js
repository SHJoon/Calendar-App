import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import axios from "axios";

const CreateEvent = (props) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [errors, setErrors] = useState(null);

  const handleSubmit = (e) => {
    const formData = {
      title,
      start: startDate,
      end: endDate,
    };
    axios
      .post(`http://localhost:8000/api/events/create`, formData)
      .then((res) => {
        setOpen(false);
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
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
              <label for="event-title">Title: </label>
              <input
                type="text"
                id="event-title"
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors?.title && (
                <p style={{ color: "red" }}>{errors.title?.message}</p>
              )}
            </div>
            <div>
              <label for="event-title">Start: </label>
              <input
                type="date"
                id="event-title"
                onChange={(e) => setStartDate(e.target.value)}
              />
              {errors?.start && (
                <p style={{ color: "red" }}>{errors.start?.message}</p>
              )}
            </div>
            <div>
              <label for="event-end">End: </label>
              <input
                type="date"
                id="event-end"
                onChange={(e) => setEndDate(e.target.value)}
              />
              {errors?.end && (
                <p style={{ color: "red" }}>{errors.end?.message}</p>
              )}
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
