import { useState } from "react";
import { API_TYPES } from "../constants";
export default function Input({
  item,
  sendRequest,
  onRequestInputChange,
  isLoading,
}) {
  const [request, setRequest] = useState({
    url: item.url ?? "",
    method: item.method ?? API_TYPES.GET.method,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value.trim() });
    onRequestInputChange({ ...request, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (request.url.trim() && request.method.trim()) {
      sendRequest(request);
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex w-full">
        <select
          className="form-request bg-black text-white cursor-pointer"
          name="method"
          id="method"
          value={request.method}
          onChange={onChangeHandler}
        >
          {Object.keys(API_TYPES).map((option) => (
            <option key={API_TYPES[option].name}>
              {API_TYPES[option].name}
            </option>
          ))}
        </select>
        <input
          className="bg-gray-900 form-request text-white w-full border-l-0 border-r-0 outline-none"
          id="url"
          name="url"
          type="text"
          value={request.url}
          onChange={onChangeHandler}
          autoComplete="off"
        />
        <button
          className="mb-0 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none active:bg-purple-600 bg-purple-500 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send"}
        </button>
      </div>
    </form>
  );
}
