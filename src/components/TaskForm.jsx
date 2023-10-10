import { useState, useContext } from "react";
import React from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      title,
      descripcion,
      date,
      time,
    };
    createTask(task);
    setTitle("");
    setDescripcion("");
    setDate("");
    setTime("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">
          Create your tasks
        </h1>
        <input
          id="task"
          placeholder="Write your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          required
        />
        <textarea
          id="description"
          placeholder="Write the description of your task"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        {/* Date input */}
        <input
          type="date"
          id="date"
          placeholder="Select date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        {/* Time input */}
        <input
          type="time"
          id="time"
          placeholder="Select time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <button className="bg-green-600 px-3 py-1 text-black rounded-md">
          Save
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
