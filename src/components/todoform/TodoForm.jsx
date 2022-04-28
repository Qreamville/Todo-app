import { nanoid } from "nanoid";
import React, { useState } from "react";
import "./todoForm.css";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleInputChange(event) {
    setTodo({ ...todo, task: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: nanoid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <div className="todo__form">
      <form onSubmit={handleSubmit}>
        <input
          name="task"
          type="text"
          value={todo.task ?? ""}
          required
          onChange={handleInputChange}
          placeholder="Create a new todo..."
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default TodoForm;
