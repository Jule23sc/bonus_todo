import { useState } from "react";
//destructuring addtodo
//event.target.value damit input wert gespeichert wird
//event weil wir keinen addeventlistener mehr schreiben in react

function TodoForm({addTodo}) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  //trim() methode um leerzeichen auszuschließen
  //Trick: date.now() für immer neue, eindeutige id
  //newtodo wir erstellen neues OBJEKT
  //"" input feld nach eingabe wieder frei machen
  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      addTodo(newTodo);
      setInputValue("");
    }
  };

  //submit checkt ganzes formular ab, wenn user klickt, deswegen ist entern möglich!
  return (

    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} placeholder="Neues To-Do"/>
      <button type="submit">hinzufügen</button>
    </form>
  );
}
export default TodoForm;