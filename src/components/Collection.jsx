import React from "react";
import ListItem from "./ListItem";

export default function Collection({ apiList, setApiList, selectedRequest, setSelectedRequest }) {
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
        <button className="font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none bg-yellow-500 text-white" onClick={handleOnAdd}>
          Add
        </button>
      </div>

      <div>
        {apiList.map((item, index) => (
          <ListItem
            className={`${index===selectedRequest ? "bg-yellow-500":""}`}
            key={index}
            item={item}
            index={index}
            removeApi={handleRemove}
            selectedRequest={selectedRequest}
            setSelectedRequest={setSelectedRequest}
            clickHandler={()=>setSelectedRequest(index)}
          />
        ))}
      </div>
    </div>
  );
}
