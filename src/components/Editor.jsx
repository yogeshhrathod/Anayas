import { UnControlled as CodeMirror } from "react-codemirror2";
import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
export default function Editor({
  data,
  dataType,
  onChange,
  readOnly,
  mode = "javascript",
  jsonValidation,
}) {
  const [isError, setIsError] = useState(false);
  const [value, setValue] = useState(data);
  useEffect(() => {
    setValue(data);
  }, [data]);
  console.log({ value, data, dataType });
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
          onChange && onChange(value, dataType);
        }}
      />
      <div className="absolute bottom-0 right-0 text-red-500">
        {isError && "Invalid JSON"}
      </div>
    </div>
  );
}
