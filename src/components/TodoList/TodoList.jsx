import React, { useState } from "react";
import Todo from "../Todo/Todo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "study", status: "active" },
    { id: 2, text: "work", status: "active" },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
}
