import React, { useState } from "react";
import { api } from "../api";
import { API_TYPES } from "../constants";
import { useHandleInput } from "../utils/utilHooks";
import Editor from "../components/editor/Editor";
export default function Input() {
  const methodType = useHandleInput(API_TYPES.GET.color);
  const apiUrl = useHandleInput("");
  const [response, setResponse] = useState("");

  const sendRequest = async (e) => {
    e.preventDefault();
    const { data } = await api(methodType.value, apiUrl.value, {});
    setResponse(data);
  };

  return (
    <form onSubmit={sendRequest}>
      <div className="flex w-full">
        <select
          className="form-input"
          name="rest-types"
          id="rest-types"
          {...methodType}
        >
          {Object.keys(API_TYPES).map((option) => (
            <option key={API_TYPES[option].name}>
              {API_TYPES[option].name}
            </option>
          ))}
        </select>
        <input className="form-input w-full" type="text" {...apiUrl} />
        <button className="mb-0 btn btn-primary">SEND</button>
      </div>
    </form>
  );
}
