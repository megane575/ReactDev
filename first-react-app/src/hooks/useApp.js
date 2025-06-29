import { useState, useCallback } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data.js";

export const useApp = () => {
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);

  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);

  const addTodo = useCallback(
    (title, content) => {
      const nextUniqueId = uniqueId + 1;
      const newTodo = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: title,
          content: content,
        },
      ];

      setOriginTodoList(newTodo);
      setUniqueId(nextUniqueId);
    },
    [originTodoList, uniqueId]
  );

  const updateTodo = useCallback(
    (id, title, content) => {
      const updatedTodoList = originTodoList.map((todo) => {
        if (id === todo.id) {
          return {
            id: todo.id,
            title: title,
            content: content,
          };
        }

        return todo;
      });
      setOriginTodoList(updatedTodoList);
    },
    [originTodoList]
  );

  const deleteTodo = useCallback(
    (targetId, targetTitle) => {
      if (window.confirm(`「${targetTitle}」のtodoを削除しますか？`)) {
        const newTodoList = originTodoList.filter(
          (todo) => todo.id !== targetId
        );

        setOriginTodoList(newTodoList);
      }
    },
    [originTodoList]
  );

  return {
    originTodoList,
    addTodo,
    updateTodo,
    deleteTodo,
  };
};
