import { useDispatch } from "react-redux";
import "./todoitem.css";
import { setCheck } from "../../features/todoSlice";

const TodoItem = ({ title, done, id }) => {
  const dispatch = useDispatch();
  const handleChange = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        className="checkbox"
        id={id}
        checked={done}
        onChange={handleChange}
      />
      <label htmlFor={id}>{title}</label>
    </div>
  );
};

export default TodoItem;
