import { createContext } from "react";
import { useApp } from "../hooks/useApp"

export const TodoContext = createContext();

export const TodoProvider = () => {
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

        </TodoContext.Provider>
    );
};
 