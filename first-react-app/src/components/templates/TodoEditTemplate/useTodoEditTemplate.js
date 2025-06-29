import { useMemo, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router";
import { NAVIGATION_PATH } from "../../../constants/navigation";

export const useTodoEditTemplate = ({ originTodoList, updateTodo }) => {
  const navigate = useNavigate();

  const { id } = useParams();

  const todo = useMemo(
    () => originTodoList.find((todo) => String(todo.id) === id),
    [id, originTodoList]
  );
  /* local state */
  const [inputTitle, setInputTitle] = useState(todo?.title || "");
  const [inputContent, setInputContent] = useState(todo?.content || "");

  /**
   * 「title」変更処理
   * @type {function(*): void}
   */
  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  /**
   * 「content」変更処理
   * @type {function(*): void}
   */
  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  /**
   * Todo更新処理
   * @type {(function(*): void)|*}
   */
  const handleUpdateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (!!todo?.id && inputTitle !== "" && inputContent !== "") {
        updateTodo(todo.id, inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [navigate, todo?.id, inputTitle, inputContent, updateTodo]
  );

  return {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  };
};
