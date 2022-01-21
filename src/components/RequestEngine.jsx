import React, { useState } from "react";
import Input from "./Input";
import Editor from "./Editor";
import { api } from "../api";
import Tabs from "./Tabs/index";
import KeyValueTable from "./KeyValueTable";
export default function RequestEngine({ apiList, selectedRequest }) {
  const onChange = (data, type) => {
    apiList[selectedRequest][type] = data;
  };

  const tabsInfo = [
    {
      name: "Param",
      component: (
        <div key="{'params'}">
          <KeyValueTable
            onChange={onChange}
            data={apiList[selectedRequest].params}
            dataType="params"
          />
        </div>
      ),
    },
    {
      name: "Header",
      component: (
        <div key="header">
          <KeyValueTable
            onChange={onChange}
            data={apiList[selectedRequest].header}
            dataType="header"
          />
        </div>
      ),
    },
    {
      name: "Body",
      component: (
        <Editor
          key="body"
          onChange={onChange}
          data={apiList[selectedRequest].body}
          jsonValidation={true}
          dataType="body"
        />
      ),
    },
    {
      name: "Pre Script",
      component: (
        <Editor
          key="pre-script"
          onChange={onChange}
          data={apiList[selectedRequest].preScript}
          dataType="preScript"
        />
      ),
    },
    {
      name: "Post Script",
      component: (
        <Editor
          key="pre-script"
          onChange={onChange}
          data={apiList[selectedRequest].postScript}
          dataType="postScript"
        />
      ),
    },
  ];

  const [response, setResponse] = useState(apiList[selectedRequest].response);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async ({ method, url }) => {
    try {
      setIsLoading(true);
      const { data } = await api(method, url, {});
      setIsLoading(false);
      setResponse(data);
      apiList[selectedRequest].response = data;
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onRequestInputChange = (input) => {
    apiList[selectedRequest] = { ...apiList[selectedRequest], ...input };
  };

  return (
    <>
      <div className="px-3 py-3 bg-gray-900">
        <Input
          isLoading={isLoading}
          key={`input_${selectedRequest}`}
          item={apiList[selectedRequest]}
          onRequestInputChange={onRequestInputChange}
          sendRequest={sendRequest}
        />
      </div>
      <div className="flex flex-col">
        <Tabs
          key={`tabs_${selectedRequest}`}
          existingSelectedTab={apiList[selectedRequest].selectedTabIndex}
          tabs={tabsInfo}
          onChange={onChange}
          dataType={"selectedTabIndex"}
        />
      </div>
      <div className="m-2">
        <div>Response</div>
        <Editor key={`response`} dataType="response" data={response} />
      </div>
    </>
  );
}
