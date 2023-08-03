import React from "react";

//destructuring um werte aus objekt raus und in neue variable rein, vor allem in andere components reinzukriegen
//meine props sind array und func()
//in die Klammern um die "mitzugeben"

function TodoList({todos, clickChange, deleteTodo}) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.completed} onChange={() => clickChange(todo.id)}/>
          <span style={{textDecoration: todo.completed ? "line-through" : "none"}}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>löschen</button>
        </li>
      ))}
    </ul>
  );
}
//doppelte geschweifte Klammern weil js code aber css attribute
export default TodoList;