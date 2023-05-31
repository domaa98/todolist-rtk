import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../../features/todoSlice";

const Input = () => {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput) {
      dispatch(
        saveTodo({
          id: Date.now(),
          title: userInput,
          done: false,
        })
      );
      setUserInput("");
      return;
    } else {
      alert("Please add some todos  ");
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Input;
