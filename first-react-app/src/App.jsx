import './App.css';
import { useApp } from "./hooks/useApp";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { SearchWordTodo } from "./components/SearchedList"

export const App = () => {
    const [states,actions] = useApp();
    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            {/*Todo追加領域*/} 
            <section className="common-area">
              <AddTodo
              addInputValue={states.addInputValue}
              onChangeAddInputValue={actions.onChangeAddInputValue}
              handleAddTodo={actions.handleAddTodo}
              />
            </section>
             {/*Todo検索フォーム領域*/}
            <section className="common-area"> 
            < SearchWordTodo
              searchKeyword={states.searchKeyword}
              handleChangeSearchKeyword={actions.handleChangeSearchKeyword}
              handleKeyDownSearch={actions.handleKeyDownSearch}
            />
            {/*Todo一覧表示領域*/}
            < TodoList
                todoList={actions.filteredTodoList}
                handleDeleteTodo={actions.handleDeleteTodo}
              /> 
            </section>
        </div>
    );
};
