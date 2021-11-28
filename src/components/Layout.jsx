import React, { useState } from "react";
import Collection from "./Collection";
import { BrowserRouter } from "react-router-dom";
import RequestEngine from "./RequestEngine";

export default function Layout() {
  const [apiList, setApiList] = useState([]);
  const list = { apiList, setApiList };
  return (
    <BrowserRouter>
      <div className="flex">
        <div className="w-1/4">
          <Collection {...list} />
        </div>
        <div className="inline-block w-3/4">
          <RequestEngine {...list} />
        </div>
      </div>
    </BrowserRouter>
  );
}
