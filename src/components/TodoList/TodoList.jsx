import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "study", status: "active" },
    { id: 2, text: "work", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </section>
  );
}
