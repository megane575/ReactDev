import { useTodoEditTemplate } from "./useTodoEditTemplate.js";
import { useTodoContext } from "../../../hooks/useTodoContext.js";
import { BaseLayout } from "../../organisms/index.js";
import { CommonButton, TextArea, InputForm } from "../../atoms/index.js";
import './style.css';

export const TodoEditTemplate = () => {
  const { originTodoList, updateTodo } = useTodoContext();

  const {
    todo,
    inputTitle,
    inputContent,
    handleChangeTitle,
    handleChangeContent,
    handleUpdateTodo,
  } = useTodoEditTemplate({ originTodoList, updateTodo });

  return (
    <BaseLayout title={"TodoEdit"}>
      {!!todo && (
        <form className='container'onSubmit={handleUpdateTodo}>
          <div className='area'>
            <InputForm
              value={inputTitle}
              placeholder={"Title"}
              onChange={handleChangeTitle}
            />
          </div>
          <div className='area'>
            <TextArea
              value={inputContent}
              placeholder={"Content"}
              onChange={handleChangeContent}
            />
          </div>
          <div className='area'>
            <CommonButton type="submit" label="Edit Todo" />
          </div>
        </form>
      )}
    </BaseLayout>
  );
};
