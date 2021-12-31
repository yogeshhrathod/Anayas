import React, { useState } from "react";
import Collection from "./Collection";
import RequestEngine from "./RequestEngine";

export default function Layout() {
  const [apiList, setApiList] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const props = { apiList, setApiList, selectedRequest, setSelectedRequest };
  return (
    <div className="flex bg-gray-900">
      <div className="w-1/4 border-r">
        <Collection {...props} />
      </div>
      <div className="inline-block w-3/4">
        { selectedRequest!==null ? <RequestEngine {...props} /> : <div>Select a request</div> }
      </div>
    </div>
  );
}
