import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";

const CreateEvent = (props) => {
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClose = (e) => {
    e.preventDefault();
    props.setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={(e) => handleClose(e)}
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
            </div>
            <div>
              <label for="event-title">Start: </label>
              <input
                type="date"
                id="event-title"
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div>
              <label for="event-title">End: </label>
              <input
                type="date"
                id="event-title"
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
