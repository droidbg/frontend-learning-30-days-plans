import { useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState<string[]>([]);

  function addTodo(todo: string) {
    setTodos([...todos, todo]);
  }

  return (
    <div>
      <button onClick={() => addTodo("New Task")}>Add Todo</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
