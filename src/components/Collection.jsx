import React from "react";
import ListItem from "./ListItem";

export default function Collection({ apiList, setApiList }) {
  const handleOnAdd = () => {
    setApiList((existing) => [...existing, {}]);
  };

  const handleRemove = (index) => {
    apiList.splice(index, 1);
    setApiList([...apiList]);
    console.log(apiList);
  };

  return (
    <div className="h-screen bg-gray-900">
      <div className="px-3 py-3">
        <button className="btn btn-secondary" onClick={handleOnAdd}>
          Add
        </button>
      </div>

      <div>
        {apiList.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            index={index}
            removeApi={handleRemove}
          />
        ))}
      </div>
    </div>
  );
}
