import React from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./index.css";

function App() {
  return (
    <main className="bg-zinc-900 h-full">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
