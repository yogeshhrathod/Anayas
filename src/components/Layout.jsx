import React from "react";
import Collection from "./Collection";
import Input from "./Input";
import Editor from "./editor/Editor";
export default function Layout() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Collection />
      </div>
      <div className="inline-block w-3/4">
        <div className="px-3 py-3 bg-gray-900">
          <Input />
        </div>
        <Editor readOnly={true} />
      </div>
    </div>
  );
}
