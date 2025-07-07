// src/api.js
const API_BASE = "http://localhost:8000"; // バックエンドAPIのURL

export const getTodos = async () => {
  const response = await fetch(`${API_BASE}/todos`);
  if (!response.ok) throw new Error("Failed to fetch todos");
  return response.json();
};

export const createTodo = async (todo) => {
  const response = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
  if (!response.ok) throw new Error("Failed to create todo");
  return response.json();
};

export const deleteTodo = async (id) => {
  const response = await fetch(`${API_BASE}/todos/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete todo");
  return response.json();
};
