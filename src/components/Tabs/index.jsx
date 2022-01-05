import React, { useState } from "react";
import "./styles.css";

export default function Tabs({ tabs }) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div>
      <div className="flex mx-2 rounded-md bg-gray-800 relative tabs">
        {tabs.map((item, index) => {
          return (
            <button
              key={index}
              className={`tabs-item w-full relative z-10 py-1 my-2 ml-2 text-center rounded-md  text-sm cursor-pointer select-none focus:outline-none text-white ${
                index === selectedTab ? "active" : ""
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {item.name}
            </button>
          );
        })}
        <span
          className={`tab-item-animate rounded-md bg-purple-500 active`}
        ></span>
      </div>
      <div className="m-2">
        {tabs.map((item, index) => {
          return (
            <div
              key={`tab-index-${index}`}
              className={selectedTab === index ? "block" : "hidden"}
            >
              {item.component}
            </div>
          );
        })}
      </div>
    </div>
  );
}
