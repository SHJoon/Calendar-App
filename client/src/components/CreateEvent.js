import React from "react";
import Modal from "@material-ui/core/Modal";

const CreateEvent = (props) => {

    const handleClose = (e) => {
        e.preventDefault();
        props.setOpen(false);
    }


  return (
    <div>
      <Modal
        open={props.open}
        onClose={e => handleClose(e)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div></div>
      </Modal>
    </div>
  );
};

export default CreateEvent;
