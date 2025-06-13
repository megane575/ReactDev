import './App.css';
import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./constants/data";
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { SearchWordTodo } from "./components/SearchedList"

export const App = () => {
    const [ todoList, setTodoList] = useState(INIT_TODO_LIST);
    const [ addInputValue, setAddInputValue] = useState("");
    const [ uniqueId, setUiqueId ] = useState(INIT_UNIQUE_ID);
    const [ searchKeyword, setSearchKeyword ] = useState("");

    const onChangeAddInputValue = (event) => {
      setAddInputValue(event.target.value)
    }
    const handleAddTodo = (event) => {
      if (event.key === "Enter" && addInputValue !==""){
        const newUniqueId = uniqueId + 1
        const newTodoList = [
          ...todoList,
        {
          id:uniqueId + 1,
          title: addInputValue,
        }
        ];
        setTodoList(newTodoList);
        setUiqueId(newUniqueId);
        setAddInputValue("");
      }
    }

    const handleDeleteTodo = (targetId, targetTitle) => {
      if (window.confirm(`${targetTitle}のTodoを削除しますか？`)){
        const newTodoList = todoList.filter((todo) =>{
          return todo.id !== targetId;
        });  
        setTodoList(newTodoList)
      }
    }

    const handleChangeSearchKeyword =(event) =>{
      setSearchKeyword(event.target.value);
    };

    const handleKeyDownSearch = (event) => {
      if (event.key === "Enter"){
        setSearchKeyword("");
      }
    };

    const filteredTodoList = todoList.filter((todo)=>
      todo.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
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
    );
};
