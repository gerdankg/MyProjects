import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import TheBegining from "./components/TheBegining";
// Import components

function App() {
  //

  //State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all"); //default will be "all"
  const [filterTodos, setFilteredTodos] = useState([]);
  const [value, setValue] = useState("");
  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
  }, [todos, status]);
  //Here we're writing javascript
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  ///SAve to local storage my friend
  const saveLocalTodos = () => {
    localStorage.setItem(todos, JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem(todos) === null) {
      localStorage.setItem(todos, JSON.stringify([]));
    } else {
      let loccc = JSON.parse(localStorage.getItem(todos));
      setTodos(loccc);
    }
  };
  return (
    <div className='App'>
      <header>
        <h1>Hello U ll achieve anything </h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filterTodos={filterTodos}
        saveLocalTodos={saveLocalTodos}
      />

      <TheBegining />
    </div>
  );
}

export default App;
