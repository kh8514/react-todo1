import React, { useState } from "react";
import Todo from "../Todo/Todo";
import AddTodo from "../AddTodo/AddTodo";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "study", status: "active" },
    { id: 2, text: "work", status: "active" },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (update) =>
    setTodos(todos.map((todo) => (todo.id === update.id ? update : todo)));
  const handleDelete = (deleted) =>
    setTodos(todos.filter((todo) => todo.id !== deleted.id));

  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
