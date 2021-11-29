import React, { useState } from "react";
import Input from "./Input";
import Editor from "./Editor";
import { api } from "../api";
import { useParams } from "react-router-dom";
import Tabs from "./Tabs/index";
export default function RequestEngine({ apiList }) {
  let apiIndex = useParams();
  const tabsInfo = [
    { name: "Param", component: <div key="params">Param</div> },
    { name: "Header", component: <div key="header">Header</div> },
    { name: "Body", component: <Editor key="body" /> },
  ];
  const [response, setResponse] = useState();
  const sendRequest = async (e, methodType, apiUrl) => {
    e.preventDefault();
    const { data } = await api(methodType.value, apiUrl.value, {});
    setResponse(data);
  };
  return (
    <>
      <div className="px-3 py-3 bg-gray-900">
        <Input index={apiList[apiIndex]} sendRequest={sendRequest} />
      </div>
      <Tabs tabs={tabsInfo} />
      <Editor readOnly={true} response={response} />
    </>
  );
}
