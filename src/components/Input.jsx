import React from "react";
import { API_TYPES } from "../constants";
export default function Input() {
  return (
    <div className="flex w-full">
      <select className="form-input" name="rest-types" id="rest-types">
        {Object.keys(API_TYPES).map((option) => (
          <option>{API_TYPES[option]}</option>
        ))}
      </select>
      <input className="form-input w-full" type="text" />
      <button className="m-0 btn btn-primary">SEND</button>
    </div>
  );
}
