import { useState } from "react";
import React from "react";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); //sirve para que el estado guarde lo que tipeo
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
