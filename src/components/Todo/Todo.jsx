import React from "react";

export default function Todo({ todo }) {
  const { id, text } = todo;
  console.log(todo);
  return (
    <li>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
    </li>
  );
}
