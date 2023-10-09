import React, { useContext } from "react";
import TaskCards from "./TaskCards";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
  const { tasks } = useContext(TaskContext);

  if (!tasks || tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No tasks created
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
