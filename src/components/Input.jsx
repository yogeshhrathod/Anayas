import { API_TYPES } from "../constants";
import { useHandleInput } from "../utils/utilHooks";
export default function Input({ item, sendRequest }) {
  const methodType = useHandleInput(API_TYPES.GET.color);
  const apiUrl = useHandleInput(item?.url || "");
  return (
    <form onSubmit={(e) => sendRequest(e, methodType, apiUrl)}>
      <div className="flex w-full">
        <select
          className="form-input bg-black text-white"
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
        <input
          className="bg-gray-900 form-input text-white w-full"
          type="text"
          {...apiUrl}
        />
        <button className="mb-0 btn btn-primary">SEND</button>
      </div>
    </form>
  );
}
