import { useEffect, useState } from "react";
import { getTodos, createTodo, deleteTodo} from "./api";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await getTodos();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    }
  };

  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) return;

    try {
      await createTodo({ title: newTitle, content: newContent });
      setNewTitle("");
      setNewContent("");
      await loadTodos(); // 追加後に一覧を再取得
    } catch (err) {
      console.error("Error creating todo:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("このTODOを削除しますか？")) return;

    try {
      await deleteTodo(id);
      await loadTodos(); // 再取得してリスト更新
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="タイトル"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="内容"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>: {todo.content}
            <button onClick={() => handleDelete(todo.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
