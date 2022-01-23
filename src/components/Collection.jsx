import React from "react";
import ListItem from "./ListItem";

export default function Collection({
  apiList,
  setApiList,
  selectedRequestIndex,
  setSelectedRequestIndex,
}) {
  const handleOnAdd = () => {
    setApiList((existing) => [...existing, {}]);
  };

  const handleRemove = (index) => {
    apiList.splice(index, 1);
    setApiList([...apiList]);
  };

  return (
    <div className="h-screen">
      <div className="px-3 py-3">
        <button
          className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none bg-yellow-500 text-white"
          onClick={handleOnAdd}
        >
          Add
        </button>
      </div>

      <div>
        {apiList.map((item, index) => (
          <ListItem
            className={`${
              index === selectedRequestIndex ? "bg-yellow-500" : ""
            }`}
            key={`list-item-${index}`}
            item={item}
            index={index}
            removeApi={handleRemove}
            selectedRequestIndex={selectedRequestIndex}
            setSelectedRequestIndex={setSelectedRequestIndex}
            clickHandler={() => setSelectedRequestIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
