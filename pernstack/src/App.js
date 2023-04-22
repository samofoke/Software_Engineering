import React from "react";
import { Fragment } from "react";
import InputTodo from "./components/inputTodo/input";
import ListTodo from "./components/listTodo/list";
import "./App.css";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodo />
      </div>
    </Fragment>
  );
}

export default App;
