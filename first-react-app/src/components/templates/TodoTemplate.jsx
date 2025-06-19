import { AddTodo } from "../../components/AddTodo";
import { TodoList } from "../../components/TodoList";
import { SearchWordTodo } from "../../components/SearchedList"
import { useTodoContext } from "../../hooks/useTodoContext";
import "./style.css";

export const TodoTemplate = () => {
    const {
        addInputValue,
        searchKeyword,
        onChangeAddInputValue,
        handleAddTodo, 
        handleDeleteTodo,
        handleChangeSearchKeyword,
        handleKeyDownSearch,
        filteredTodoList,
    } = useTodoContext();
    return(
        <div className="container">
            <h1 className="title">Todo List</h1>
            {/*Todo追加領域*/} 
            <section className="common-area">
              <AddTodo
              addInputValue={addInputValue}
              onChangeAddInputValue={onChangeAddInputValue}
              handleAddTodo={handleAddTodo}
              />
            </section>
             {/*Todo検索フォーム領域*/}
            <section className="common-area"> 
            < SearchWordTodo
              searchKeyword={searchKeyword}
              handleChangeSearchKeyword={handleChangeSearchKeyword}
              handleKeyDownSearch={handleKeyDownSearch}
            />
            {/*Todo一覧表示領域*/}
            < TodoList
                todoList={filteredTodoList}
                handleDeleteTodo={handleDeleteTodo}
              /> 
            </section>
        </div>
    )
}