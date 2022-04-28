import React from "react";
import Todo from "../todo/Todo";

const TodoList = ({ todos, handleCompleteTodo, handleRemove }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCompleteTodo={handleCompleteTodo}
          handleRemove={handleRemove}
        />
      ))}
    </ul>
  );
};

export default TodoList;
