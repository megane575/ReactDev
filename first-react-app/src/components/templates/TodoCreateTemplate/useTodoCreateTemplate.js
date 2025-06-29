import { useNavigate } from "react-router";
import { useState, useCallback } from "react";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import { useTodoContext } from "../../../hooks/useTodoContext";

export const useTodoCreateTemplate = () => {
  const navigate = useNavigate();
  const { addTodo } = useTodoContext();

  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  const handleChangeTitle = useCallback(
    (e) => setInputTitle(e.target.value),
    []
  );

  const handleChangeContent = useCallback(
    (e) => setInputContent(e.target.value),
    []
  );

  const handleCreateTodo = useCallback(
    (e) => {
      e.preventDefault();
      if (inputTitle !== "" && inputContent !== "") {
        addTodo(inputTitle, inputContent);
        navigate(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitle, inputContent, navigate]
  );
  return {
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleCreateTodo,
  };
};
