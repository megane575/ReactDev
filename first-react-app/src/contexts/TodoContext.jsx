import { createContext } from "react";
import { useApp } from "../hooks/useApp"

const TodoContext = createContext();

export {TodoContext}

export const TodoProvider = ({children}) => {
  const { originTodoList, addTodo, updateTodo, deleteTodo } = useApp();

  return (
    <TodoContext.Provider
      value={{
        originTodoList,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};