import React from "react";
import ReactDOM from "react-dom/client"; // Cambia la importación
import App from "./App.jsx";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext.jsx"; // Cambia la importación

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
