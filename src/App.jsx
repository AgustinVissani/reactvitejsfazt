import React, { useEffect, useState } from "react";
import { tasks as data } from "./assets/./data/tasks";
import TaskList from "./assets/components/TaskList";
import TaskForm from "./assets/components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

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

  return (
    <>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tasks} />
    </>
  );
}

export default App;
