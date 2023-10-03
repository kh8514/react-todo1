import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function Todo({ todo, onUpdate, onDelete }) {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <li>
      <input
        type="checkbox"
        id={id}
        checked={status === "completed"}
        onChange={handleChange}
      />
      <label htmlFor={id}>{text}</label>
      <span>
        <button onClick={handleDelete}>
          <IoTrashBinOutline />
        </button>
      </span>
    </li>
  );
}
