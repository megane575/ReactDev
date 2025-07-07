import { BaseLayout, TodoList } from "../../organisms/index.js";
import { InputForm } from "../../atoms/index.js";
import { useTodoContext } from "../../../hooks/useTodoContext.js";
import { useTodoListTemplate } from "./useTodoListTemplate.js";
import './style.css';

export const TodoListTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useTodoContext();

  const { searchKeyword, showTodoList, handleChangeSearchKeyword } =
    useTodoListTemplate({ originTodoList });

  return (
    <BaseLayout title={"TodoList"}>
      <div className='container'>
        {/* Todo検索フォームエリア */}
        <div className='area'>
          <InputForm
            value={searchKeyword}
            placeholder={"Search Keyword"}
            onChange={handleChangeSearchKeyword}
          />
        </div>
        {/* Todoリスト一覧表示 */}
        <div className='area'>
          {showTodoList.length > 0 && (
            <TodoList todoList={showTodoList} handleDeleteTodo={deleteTodo} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};
