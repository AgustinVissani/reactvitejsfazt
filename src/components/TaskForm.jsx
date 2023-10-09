import { useState, useContext } from "react";
import React from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault(); //sirve para que el estado guarde lo que tipeo
    createTask({ title, descripcion });
    setTitle("");
    setDescripcion("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Create your tasks</h1>
        <input
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        ></input>
        <textarea
          placeholder="Write the description of your task"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-green-600 px-3 py-1 text-black">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
