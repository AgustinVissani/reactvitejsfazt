import React, { useContext } from "react"; 
import { TaskContext } from "../context/TaskContext";

function TaskCards({ task}) {

  
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 font-bold text-sm">{task.descripcion}</p>
      <p className="text-gray-300 text-sm">Date: {task.date}</p>
      <p className="text-gray-300 text-sm">Time: {task.time}</p>
      <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={() => deleteTask(task.id)}>Delete task</button>
    </div>
  );
}

export default TaskCards;
