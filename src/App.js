import { useState } from "react";
import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";
import sunIcon from "./asset/icon-sun.svg";
import sunMoon from "./asset/icon-moon.svg";

function App() {
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
  };

  function handleCompleteTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  return (
    <main className="App" id={theme ? "light" : "dark"}>
      <header></header>
      <main>
        <div className="header__main">
          <h1>TODO</h1>
          <img
            src={theme ? sunMoon : sunIcon}
            alt="sunIcon"
            onClick={changeTheme}
          />
        </div>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          handleCompleteTodo={handleCompleteTodo}
          handleRemove={handleRemove}
        />
      </main>
    </main>
  );
}

export default App;
