import React, { useState } from "react";
import Collection from "./Collection";
import RequestEngine from "./RequestEngine";

export default function Layout() {
  const [apiList, setApiList] = useState([]);
  const [selectedRequestIndex, setSelectedRequestIndex] = useState(null);
  const props = {
    apiList,
    setApiList,
    selectedRequestIndex,
    setSelectedRequestIndex,
  };
  return (
    <div className="flex bg-gray-900">
      <div className="w-1/4 border-r">
        <Collection {...props} />
      </div>
      <div className="inline-block w-3/4">
        {selectedRequestIndex !== null ? (
          <RequestEngine
            key={`requestEngine_${selectedRequestIndex}`}
            {...props}
          />
        ) : (
          <div>Select a request</div>
        )}
      </div>
    </div>
  );
}
