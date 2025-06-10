import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { useState } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "./constants/data";

export const App = () => {
    const [ todoList, setTodoList] = useState(INIT_TODO_LIST);
    const [ addInputValue, setAddInputValue] = useState("")
    const [ uniqueId, setUiqueId ] = useState(INIT_UNIQUE_ID)
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
        console.log(newUniqueId)
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
    
    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            {/*Todo追加領域*/} 
            <section className="common-area">
              <h2 className="add-title">ADD Todo</h2>
              <input 
              className='new-todo' 
              type='text' 
              value={addInputValue} 
              onChange={onChangeAddInputValue}
              onKeyDown={handleAddTodo}
              placeholder='New Todo'>
              </input>
            </section>
             {/*Todo検索フォーム領域*/}
            <section className="common-area"> 
              <input className='search-keyword' type='text' placeholder='Search Keyword'></input>
            </section>
            {/*Todo一覧領域*/} 
            <section className="common-area"> 
              <ul className="todo-list">
                {todoList.map((todo) => {
                  return (
                  <li className="todo" key={todo.id}>
                  <span className="todo-task">{todo.title}</span>
                  <FontAwesomeIcon className="far" icon={faTrash} 
                  onClick={() => handleDeleteTodo(todo.id,todo.title)}/>
                  </li>)
                })}
              </ul>
            </section>
        </div>
    );
};
