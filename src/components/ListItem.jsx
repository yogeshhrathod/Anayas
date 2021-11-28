import React, { useState, useRef } from "react";
import { useHandleInput } from "../utils/utilHooks";
import { FaTrash, FaCheck, FaPencilAlt } from "react-icons/fa";
import { onEnter } from "../utils/common";
import { Link } from "react-router-dom";

export default function ListItem({ item, index, removeApi }) {
  const name = useHandleInput(item?.name ?? "New API");
  const [edit, setEdit] = useState(false);
  const ref = useRef(null);

  const toggleEdit = (e) => {
    e.preventDefault();
    if (!edit) ref?.current?.focus();
    setEdit((current) => !current);
  };

  return (
    <div className="flex w-full px-2 py-1 my-1 mx-1">
      <div className="w-full text-white">
        {edit ? (
          <input
            ref={ref}
            onKeyPress={(e) => onEnter(e, toggleEdit)}
            className="w-full bg-gray-500 outline-none px-2 py-1 rounded"
            {...name}
          />
        ) : (
          <Link
            to={"/" + index}
            className="w-full px-2 py-1 truncate"
            onDoubleClick={toggleEdit}
          >
            {name.value}
          </Link>
        )}
      </div>
      <div className="flex flex-nowrap text-white">
        <button
          onClick={toggleEdit}
          className="small-btn  p-1 ml-1 hover:text-blue-600"
        >
          {edit ? <FaCheck /> : <FaPencilAlt />}
        </button>
        <button
          onClick={() => removeApi(index)}
          className="small-btn  p-1 ml-1 hover:text-red-600 "
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
