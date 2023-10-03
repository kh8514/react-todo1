import React from "react";
import { IoTrashBinOutline } from "react-icons/io5";

export default function Todo({ todo }) {
  const { id, text } = todo;
  console.log(todo);
  return (
    <li>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>{text}</label>
      <span>
        <button>
          <IoTrashBinOutline />
        </button>
      </span>
    </li>
  );
}
