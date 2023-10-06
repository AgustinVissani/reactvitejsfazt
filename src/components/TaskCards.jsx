import React, { useContext } from "react";
function TaskCards({ task, deleteTask }) {

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
      <button onClick={() => deleteTask(task.id)}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCards;
