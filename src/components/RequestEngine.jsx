import React, { useState } from "react";
import Input from "./Input";
import Editor from "./Editor";
import { api } from "../api";
import Tabs from "./Tabs/index";
export default function RequestEngine({ apiList, selectedRequest }) {

  const tabsInfo = [
    { name: "Param", component: <div key="params">Param</div> },
    { name: "Header", component: <div key="header">Header</div> },
    { name: "Body", component: <Editor key="body" /> },
  ];

  const [response, setResponse] = useState();

  const sendRequest = async ({method, url}) => {
    const { data } = await api(method, url, {});
    setResponse(data);
  };

  const onRequestInputChange = (input) => {
    apiList[selectedRequest] = {...apiList[selectedRequest], ...input};
  }
  
  return (
    <>
      <div className="px-3 py-3 bg-gray-900">
        <Input key={`input_${selectedRequest}`} item={apiList[selectedRequest]} onRequestInputChange={onRequestInputChange} sendRequest={sendRequest} />
      </div>
      <Tabs tabs={tabsInfo} />
      <Editor readOnly={true} response={response} />
    </>
  );
}
