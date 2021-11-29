import { useState } from "react";

export const useHandleInput = (defaultValue) => {
  const [input, setInput] = useState(defaultValue);

  return {
    value: input,
    onChange: (e) => {
      setInput(e.target.value);
    },
  };
};
