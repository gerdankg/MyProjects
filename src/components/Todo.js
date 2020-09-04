import React from "react";

export const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id)); /// todos.filter goes for any id (filtering) aand if its matches then we remove it
    //console.log(todo);
  };
  const completeHandler = () => {
    setTodos(
      todos.map(item => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed, /// whateever property does it have
          };
        }
        return item;
      })
    );
  };

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>{" "}
      <button onClick={completeHandler} className='complete-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className='fas fa-trash'></i>
      </button>
    </div>
  );
};

export default Todo;
