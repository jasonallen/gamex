import React from "react";
import "./styles.css";
import DialogBox from "./ux/DialogBox";

// Just hard coding these for now to demonstrate our DialogBox component.
const messages = [
  "This is a very cool RPG dialog message.",
  "If you would like to see more awesome stuff, check out the other writeups at codeworkshop.dev!",
  "Remember to wash your hands!"
];

export default function App() {
  return (
    <div className="App">
      <DialogBox messages={messages} />
    </div>
  );
}
