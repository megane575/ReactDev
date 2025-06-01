import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import './App.css';


export const App = () => {
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
                <li className="todo">
                  <span className="todo-task">Todo1</span>
                  <FontAwesomeIcon className="far" icon={faTrash} />
                </li>
                <li className="todo">
                  <span className="todo-task">Todo2</span>
                  <FontAwesomeIcon className="far" icon={faTrash} />
                </li>
              </ul>
            </section>
        </div>
    );
};
