import React from "react";
import Input from "./input";
import Form from "./form";

var isLoggedIn = false;

const currentTime = new Date().getHours();

console.log(currentTime);

function App() {
  return;
  <div className="container">
    {isLoggedIn == true ? <h1>Hello</h1> : <Form />}
  </div>;
}

export default App;
