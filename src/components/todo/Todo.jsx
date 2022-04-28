import React from "react";
import "./todo.css";
import { BsTrash } from "react-icons/bs";

const Todo = ({ todo, handleCompleteTodo, handleRemove }) => {
  const styles = {
    textDecoration: todo.completed ? "line-through" : "none",
    color: todo.completed && "grey",
  };

  return (
    <div className="todo">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onClick={() => handleCompleteTodo(todo.id)}
          readOnly
        />
        <li style={styles}>{todo.task}</li>
      </div>
      <button onClick={() => handleRemove(todo.id)}>
        <BsTrash />
      </button>
    </div>
  );
};

export default Todo;
