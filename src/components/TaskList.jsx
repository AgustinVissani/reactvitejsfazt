import React from "react";
import { useState, useContext } from "react";
import TaskCards from "./TaskCards";

import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
