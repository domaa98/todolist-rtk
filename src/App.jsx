import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/input/Input";
import TodoItem from "./components/todoitem/TodoItem";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  console.log(todoList);

  return (
    <div className="container">
      <Input />
      <div className="todo-container">
        {todoList.map((todo) => {
          <TodoItem
            key={todo.id}
            title={todo.title}
            done={todo.done}
            id={todo.id}
          />;
        })}
      </div>
    </div>
  );
}

export default App;
