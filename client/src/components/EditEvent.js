import React from "react";

const EditEvent = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={(e) => handleClose(e)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ></Modal>
    </div>
  );
};

export default EditEvent;
