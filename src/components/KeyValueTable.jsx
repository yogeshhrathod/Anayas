import React, { useState } from "react";

export default function KeyValueTable({ data, onChange, dataType }) {
  const [dictionary, setDictionary] = useState(
    data ? [...data, { key: "", value: "" }] : [{ key: "", value: "" }]
  );

  const onChangeHandler = (index, value, type) => {
    let newDictionay = [...dictionary];
    newDictionay[index][type] = value.trim();

    if (
      (newDictionay[index].key !== "" || newDictionay[index].value !== "") &&
      !newDictionay[index + 1]
    ) {
      newDictionay.push({ key: "", value: "" });
    }

    setDictionary(newDictionay);
    onChange(
      newDictionay.filter((item) => item.key !== "" || item.value !== ""),
      dataType
    );
  };
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map((item, index) => (
            <tr key={`table-${index}`}>
              <td className="w-1/2">
                <input
                  key={`key-${index}`}
                  className="w-full rounded"
                  type="text"
                  value={item.key}
                  onChange={(e) =>
                    onChangeHandler(index, e.target.value, "key")
                  }
                />
              </td>
              <td className="w-1/2">
                <input
                  key={`value-${index}`}
                  className="w-full rounded"
                  type="text"
                  value={item.value}
                  onChange={(e) =>
                    onChangeHandler(index, e.target.value, "value")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
