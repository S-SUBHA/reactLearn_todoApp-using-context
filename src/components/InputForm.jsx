import { useState } from "react";
import { useTodo } from "../contexts";

function InputForm() {
  const [todo, setTodo] = useState("");

  const { addTodo } = useTodo();

  const createTodo = (e) => {
    const newTodo = {
      id: Date.now(),
      todo,
      completed: false,
    };

    e.preventDefault();
    addTodo(newTodo);
    setTodo("");
  };

  return (
    <>
        <form onSubmit={(e) => createTodo(e)} className="mb-4 flex min-w-full">
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Add a Todo"
            readOnly={false}
            className="px-4 py-2 flex-grow bg-inherit border-blue-700 border-2 rounded-l-xl text-2xl text-blue-700"
          />
          <button type="submit" className="p-7 rounded-r-xl bg-blue-700">Add Todo</button>
        </form>
    </>
  );
}

export default InputForm;
