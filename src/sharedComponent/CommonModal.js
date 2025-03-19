import React from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CommonModal = ({
  children,
  modalTitle,
  initialState,
  handleClose,
  renderButton,
}) => {
  return (
    <>
      {renderButton()}
      <Modal
        shouldCloseOnOverlayClick={false}
        isOpen={initialState}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel={modalTitle}
        shouldReturnFocusAfterClose
      >
        {children}
      </Modal>
    </>
  );
};

export default CommonModal;
