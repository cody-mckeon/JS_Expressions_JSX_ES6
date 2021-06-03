import React from "react";
import ReactDOM from "react-dom";

const fname = "Cody";
const lname = " McKeon";
const luckyNumber = 199;

ReactDOM.render(
  <div>
    <h1>
      Hello {fname + lname} {fname} {lname} es6 {`${fname} ${lname}`}!
    </h1>
    <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
  </div>,
  document.getElementById("root")
);
