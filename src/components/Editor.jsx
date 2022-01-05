import { UnControlled as CodeMirror } from "react-codemirror2";
import React, { useState } from "react";
import debounce from "lodash/debounce";
export default function ResponseEditor({
  response,
  readOnly,
  mode = "javascript",
  jsonValidation,
}) {
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(response);
  const validateJson = debounce((jsonText) => {
    try {
      setIsError(false);
      if (jsonValidation && jsonText) {
        JSON.parse(jsonText);
      }
    } catch (e) {
      setIsError(true);
    }
  }, 500);
  return (
    <div className="rounded border relative">
      <CodeMirror
        value={value}
        options={{
          mode: mode,
          theme: "material",
          lineNumbers: true,
          readOnly,
        }}
        onChange={(editor, data, value) => {
          setValue(value);
          validateJson(value);
        }}
      />
      <div className="absolute bottom-0 right-0 text-red-500">
        {isError && "Invalid JSON"}
      </div>
    </div>
  );
}
