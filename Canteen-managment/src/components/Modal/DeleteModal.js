import React from "react";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Confrim Delete
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Delete Item</h4>
        <p>Are You sure for Delete item</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteModal;
