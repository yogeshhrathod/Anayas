import { UnControlled as CodeMirror } from "react-codemirror2";
import React from "react";

export default function ResponseEditor({ response, readOnly }) {
  return (
    <CodeMirror
      value={response}
      options={{
        mode: "xml",
        theme: "material",
        lineNumbers: true,
        readOnly,
      }}
    />
  );
}
