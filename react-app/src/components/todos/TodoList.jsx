import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  //   console.log(todo);
  const onSubmit = (e) => {
    e.preventDefault(); // 새로고침 방지. e.stopPropagation는 이벤트 전파 방지.
    // console.log(todo);
    if (todo === "") {
      // 빈값이면 함수작동없이 리턴만 반환.
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo(""); // 입력 후 input 값 비워주기.
  };

  console.log(todos);
  return (
    <div>
      <h1>My Todos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add todo</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
