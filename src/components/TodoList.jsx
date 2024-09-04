import { useTodo } from "../contexts";

function TodoList() {
  const { todos, deleteTodo } = useTodo();

  return (
    <>
      <div className="">
        {todos.map((todo) => (
          <div key={todo.id}>
            <div>{todo.todo}</div>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="bg-amber-400 rounded-xl text-black"
            >
              Delete Todo
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
