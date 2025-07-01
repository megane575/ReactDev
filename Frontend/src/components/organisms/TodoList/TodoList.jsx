import { useCallback } from "react";
import { useNavigate } from "react-router";
import {
  faTrashAlt,
  faFile,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NAVIGATION_PATH } from "../../../constants/navigation";
import './style.css';

export const TodoList = ({ todoList, handleDeleteTodo }) => {
  const navigate = useNavigate();

  /**
   * 詳細ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveDetailPage = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.DETAIL}${id}`),
    [navigate]
  );

  /**
   * 編集ページに遷移する処理
   * @param {*} id
   * @type {function(*): void}
   */
  const handleMoveEditPage = useCallback(
    (id) => navigate(`${NAVIGATION_PATH.EDIT}${id}`),
    [navigate]
  );

  return (
    <ul className='list'>
      {todoList.map((todo) => (
        <li key={todo.id} className='todo'>
          <span className='task'>{todo.title}</span>
          <div className='area'>
            <div className='far'>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faFile}
                size="lg"
                onClick={() => handleMoveDetailPage(todo.id)}
              />
            </div>
            <div className='far'>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                onClick={() => handleMoveEditPage(todo.id)}
              />
            </div>
            <div className='far'>
              {/* https://www.digitalocean.com/community/tutorials/how-to-use-font-awesome-5-with-react-ja */}
              <FontAwesomeIcon
                icon={faTrashAlt}
                size="lg"
                onClick={() => handleDeleteTodo(todo.id, todo.title)}
              />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};
