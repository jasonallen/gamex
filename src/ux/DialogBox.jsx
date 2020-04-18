import React, { useState } from "react";
import "./DialogBox.css";
import Message from "./Message";

// Just a placeholder for now.
// const Message = () => <div />;

// Our DialogBox Component.
const DialogBox = ({ messages }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const handleClick = () => {
    if (currentMessage < messages.length - 1) {
      setCurrentMessage(currentMessage + 1);
    } else {
      setCurrentMessage(0);
    }
  };

  return (
    <div className="DialogBox">
      <div className="dialogTitle">Cameron</div>
      <Message message={messages[currentMessage]} />
      <div onClick={handleClick} className="dialogFooter">
        Next
      </div>
    </div>
  );
};

export default DialogBox;
