import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

export const useApp = () => {
  const [todoList, setTodoList] = useState(INIT_TODO_LIST);
  const [addInputValue, setAddInputValue] = useState("");
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  const [searchKeyword, setSearchKeyword] = useState("");

  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value);
  };
  const handleAddTodo = (event) => {
    if (event.key === "Enter" && addInputValue !== "") {
      const newUniqueId = uniqueId + 1;
      const newTodoList = [
        ...todoList,
        {
          id: uniqueId + 1,
          title: addInputValue,
        },
      ];
      setTodoList(newTodoList);
      setUniqueId(newUniqueId);
      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}のTodoを削除しますか？`)) {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });
      setTodoList(newTodoList);
    }
  };

  const handleChangeSearchKeyword = (event) => {
    setSearchKeyword(event.target.value);
  };

  const handleKeyDownSearch = (event) => {
    if (event.key === "Enter") {
      setSearchKeyword("");
    }
  };

  const filteredTodoList = todoList.filter((todo) =>
    todo.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return {
    todoList,
    addInputValue,
    searchKeyword,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
    handleKeyDownSearch,
    filteredTodoList,
  };
};
