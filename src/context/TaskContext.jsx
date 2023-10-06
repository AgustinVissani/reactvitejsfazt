import React, { createContext, useState, useEffect } from "react";

import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: task.length,
        descripcion: task.descripcion,
      },
    ]);
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  let x = 7;
  return (
    <TaskContextProvider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContextProvider>
  );
}
