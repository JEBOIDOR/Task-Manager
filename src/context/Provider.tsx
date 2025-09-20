/**
 * Common Pitfalls
 * Don’t use the Context API to share state between components.
 * Don’t use reducers to manage the state of your application.
 * Don’t use the useContext hook to access the context object.
 * Don’t use the useReducer hook to manage the state of your application.
 */

import { createContext, useState, type SetStateAction } from "react";
import type { Task } from "../interfaces/interfaces";

interface ProviderProps {
  task: Task;
  setTask: React.Dispatch<SetStateAction<Task>>;
}

export const ContextProvider = createContext({} as ProviderProps);

export const AppContext = ({ children }: { children: React.ReactNode }) => {
  const [task, setTask] = useState({} as Task);

  const INITIA_VALUE = {
    task: task,
    setTask: setTask,
  };

  return (
    <ContextProvider.Provider value={INITIA_VALUE}>
      {children}
    </ContextProvider.Provider>
  );
};
