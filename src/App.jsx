import { useState } from "react";
import "./App.css";
import TodoForm from "./components/todoform/TodoForm";
import TodoList from "./components/todolist/TodoList";

//in app.jsx müssen alle imports rein, die wir auf website wirklich sehen können wollen

function App() {
  const [todos, setTodos] = useState([]);

  //neues Todo
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  //Todo abhaken
  const clickChange = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Todo löschen
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //<TodoForm übergeben und dazu wieder die props von addtodo
  return (
    <div>
      <h1>To-Do Liste</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        clickChange={clickChange}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;