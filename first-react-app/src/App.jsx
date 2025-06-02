import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './App.css';
import { useState } from "react";

const initTodo = [
  {
    id:1,
    title:"Todo1",
  },
  {
    id:2,
    title:"Todo2",
  },
]
export const App = () => {
    const [ todoList, setTodoList] = useState(initTodo);
    console.log(todoList)
    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            {/*Todo追加領域*/} 
            <section className="common-area">
              <h2 className="add-title">ADD Todo</h2>
              <input className='new-todo' type='text' placeholder='New Todo'></input>
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
                  <FontAwesomeIcon className="far" icon={faTrash} />
                  </li>)
                })}
              </ul>
            </section>
        </div>
    );
};
