import React from "react";
import * as ReactDOM from "react-dom";

export default function ModalPortal({ isOpen, onClose, children }) {
  const modalStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    display: isOpen ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };
  const contentStyle = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
    color: "rgb(48, 43, 99)",
  };
  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={contentStyle}>
        {children}
        <br />
        <button
          onClick={onClose}
          class="border-solid border-2 border-tahiti rounded-md p-2"
        >
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
