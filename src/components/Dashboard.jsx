import { useTodo } from "../contexts/TodoContext.js";
import InputForm from "./InputForm.jsx";
import TodoItem from "./TodoItem.jsx";
// import TodoList from "./TodoList.jsx";

function Dashboard() {

    const {todos} = useTodo();
    
  const customStyles = {
    minWidth: "80svw",
    // maxWidth: "80svw",
    minHeight: "80svh",
    // maxHeight: "80svh",
  };

  return (
    <>
      <div
        className="p-8 rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-start items-center"
        style={customStyles}
      >
        <InputForm />

        {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
        ))}
        
        {/* <TodoList /> */}
      </div>
    </>
  );
}

export default Dashboard;
