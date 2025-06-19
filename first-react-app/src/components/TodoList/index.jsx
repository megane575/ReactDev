/**TodoList */

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css"

export const TodoList = ({todoList,handleDeleteTodo}) =>(
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
)
