import React from "react";
import "./App.css";
import Picture from './picture.jpg'

import Form from "./Form";

const App = () => {
  return (
    <>
      <div className="form-container">
        <img src={Picture} alt="pic" />
         <Form/>
      </div>
    </>
  );
};

export default App;
