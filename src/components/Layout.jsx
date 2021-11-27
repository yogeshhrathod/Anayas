import React from "react";
import Collection from "./Collection";
import Input from "./Input";

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Collection />
      </div>
      <div className="inline-block w-3/4">
        <Input />
      </div>
    </div>
  );
}
