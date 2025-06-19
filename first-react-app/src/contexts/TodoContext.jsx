import { createContext } from "react";
import { useApp } from "../hooks/useApp"

const TodoContext = createContext();

export {TodoContext}

export const TodoProvider = ({children}) => {
    const {
        todoList,
        addInputValue,
        searchKeyword,
        onChangeAddInputValue,
        handleAddTodo, 
        handleDeleteTodo,
        handleChangeSearchKeyword,
        handleKeyDownSearch,
        filteredTodoList,
    } = useApp();

    return (
        <TodoContext.Provider 
        value={{
            todoList,
            addInputValue,
            searchKeyword,
            onChangeAddInputValue,
            handleAddTodo, 
            handleDeleteTodo,
            handleChangeSearchKeyword,
            handleKeyDownSearch,
            filteredTodoList,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};
 