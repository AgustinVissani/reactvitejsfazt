import React from "react";

function TaskCards({ task }) {
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.descripcion}</p>
    </div>
  );
}

export default TaskCards;
