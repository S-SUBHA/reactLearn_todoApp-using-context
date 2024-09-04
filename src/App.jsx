import { useEffect, useState } from "react";
import { TodoContextProvider } from "./contexts/index.js";
import Dashboard from "./components/Dashboard";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    if (todo.todo === "") return;
    setTodos((prev) => [todo, ...prev]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"));

    // console.log(typeof todos);
    // console.log(todos);

    if (todos && Array.isArray(todos) && todos.length > 0) setTodos(todos);
  }, []);

  useEffect(() => {
    if (todos && todos.length > 0)
      localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContextProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <Dashboard />
    </TodoContextProvider>
  );
}

export default App;
