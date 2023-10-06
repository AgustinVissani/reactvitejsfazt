import React, { createContext } from "react";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  let x = 7;
  return <TaskContextProvider value={x}>{props.children}</TaskContextProvider>;
}
