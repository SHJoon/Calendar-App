import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import axios from "axios";

import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const CreateEvent = (props) => {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateError, setDateError] = useState(false);

  const [errors, setErrors] = useState(null);

  const handleChange = (data, key) => {
    if (key === "title") {
      setTitle(data);
    } else {
      setStartDate(data[0]);
      setEndDate(data[1]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (startDate < endDate) {
      setDateError(true);
      return;
    }

    const formData = {
      title,
      start: startDate,
      end: endDate,
    };

    axios
      .post(`http://localhost:8000/api/events/create`, formData)
      .then((res) => {
        setDateError(false);
        props.setOpen(false);
        axios
          .get(`http://localhost:8000/api/events`)
          .then((res) => {
            props.setAllEvents(res.data);
          })
          .catch((err) => {
            console.error(err);
          });
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
        <div style={modalStyle} className={classes.paper}>
          <h2 id="create-title">Create new event</h2>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label htmlFor="event-title">Title: </label>
              <input
                type="text"
                id="event-title"
                onChange={(e) => handleChange(e.target.value, "title")}
                value={title}
              />
              {errors?.title && (
                <p style={{ color: "red" }}>{errors.title?.message}</p>
              )}
            </div>
            <DateTimeRangePicker
              onChange={(value) => handleChange(value, "time")}
              value={[startDate, endDate]}
            />
            {dateError && (
              <p style={{ color: "red" }}>
                The end time must be after the start time.
              </p>
            )}
            <button>Create new Event</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
