import React from "react";
//Componenet
import Todo from "./Todo";

export const ToDoList = ({ todos, setTodos, filterTodos }) => {
  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {filterTodos.map(todo => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            todo={todo}
            text={todo.text}
          /> // for each todo we render out
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
