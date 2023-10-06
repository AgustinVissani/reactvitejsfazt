import { useState, useContext } from "react";
import React from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const valor = useContext(TaskContext);
  console.log(valor);


  const handleSubmit = (e) => {
    e.preventDefault(); //sirve para que el estado guarde lo que tipeo
    createTask({title,descripcion});
    setTitle('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      ></input>
            <textarea
        placeholder="Escribe la descripcion de tu tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
}

export default TaskForm;
