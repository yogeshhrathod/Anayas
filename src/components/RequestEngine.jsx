import React, { useState } from "react";
import Input from "./Input";
import Editor from "./Editor";
import { api } from "../api";
import Tabs from "./Tabs/index";
import KeyValueTable from "./KeyValueTable";
import { getJsonFromUrl } from "../utils/common";
export default function RequestEngine({ apiList, selectedRequestIndex }) {
  const [selectedRequest, setSelectedRequest] = useState(
    apiList[selectedRequestIndex]
  );

  const onChange = (data, type) => {
    setSelectedRequest({ ...selectedRequest, [type]: data });
    apiList[selectedRequestIndex][type] = data;
  };

  const onRequestInputChange = (input) => {
    const { url } = input;
    const params = getJsonFromUrl(url);
    let paramsObj = {};
    if (Object.keys(params).length) {
      paramsObj = { params: params };
    }
    const updatedRequest = { ...selectedRequest, ...input, ...paramsObj };
    setSelectedRequest(updatedRequest);
    apiList[selectedRequestIndex] = updatedRequest;
  };

  const tabsInfo = [
    {
      name: "Param",
      component: (
        <div key="params">
          <KeyValueTable
            onChange={onChange}
            data={selectedRequest.params}
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
            data={selectedRequest.header}
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
          data={selectedRequest.body}
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
          data={selectedRequest.preScript}
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
          data={selectedRequest.postScript}
          dataType="postScript"
        />
      ),
    },
  ];

  const [response, setResponse] = useState(selectedRequest.response);
  const [isLoading, setIsLoading] = useState(false);

  const sendRequest = async ({ method, url }) => {
    try {
      setIsLoading(true);
      const { data } = await api(method, url, {});
      setIsLoading(false);
      setResponse(data);
      selectedRequest.response = data;
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="px-3 py-3 bg-gray-900">
        <Input
          isLoading={isLoading}
          key={`input_${selectedRequestIndex}`}
          item={selectedRequest}
          onRequestInputChange={onRequestInputChange}
          sendRequest={sendRequest}
        />
      </div>
      <div className="flex flex-col">
        <Tabs
          key={`tabs_${selectedRequestIndex}`}
          existingSelectedTab={selectedRequest.selectedTabIndex}
          tabs={tabsInfo}
          onChange={onChange}
          dataType={"selectedTabIndex"}
        />
      </div>
      <div className="m-2">
        <div className="dark:text-white">Response</div>
        <Editor key={`response`} dataType="response" data={response} />
      </div>
    </>
  );
}
