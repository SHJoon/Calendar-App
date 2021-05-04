import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from "@material-ui/core/Modal";
import DateTimeRangePicker from "@wojtekmaj/react-datetimerange-picker";
import axios from "axios";

import "@wojtekmaj/react-datetimerange-picker/dist/DateTimeRangePicker.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 380,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}

const EditEvent = (props) => {
  const classes = useStyles();
  const [errors, setErrors] = useState(null);

  const handleChange = (data, key) => {
    if (key === "title") {
      var copiedData = { ...props.selectedEvent, title: data };
    } else {
      copiedData = { ...props.selectedEvent, start: data[0], end: data[1] };
    }
    props.setSelectedEvent(copiedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .put(
        `http://localhost:8000/api/events/${props.selectedEvent._id}`,
        selectedEvent
      )
      .then((res) => {
        props.setOpen(false);
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
          <h2 id="create-title">Edit event</h2>
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
            <DateTimeRangePicker
              onChange={(value) => handleChange(value, "time")}
              value={[props.selectedEvent.start, props.selectedEvent.end]}
            />
            <button>Edit Event</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default EditEvent;
