import { useParams } from "react-router";
import { useTodoContext } from "../../../hooks/useTodoContext.js";
import { BaseLayout } from "../../organisms/index.js";
import { InputForm,TextArea } from "../../atoms/index.js";
import './style.css';

export const TodoDetailTemplate = () => {
  const { originTodoList } = useTodoContext();
  const { id } = useParams();
  const todo = originTodoList.find((todo) => String(todo.id) === id);

  return (
    <BaseLayout title={"TodoDetail"}>
      {!!todo && (
        <div className='container'>
          <div className='area'>
            <InputForm disabled value={todo.title} placeholder={"Title"} />
          </div>
          <div className='area'>
            <TextArea disabled value={todo.content} placeholder={"Content"} />
          </div>
        </div>
      )}
    </BaseLayout>
  );
};
