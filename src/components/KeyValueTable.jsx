import React, { useEffect, useState } from "react";

export default function KeyValueTable({ data, onChange, dataType }) {
  const preProcessData = (data) => {
    return Object.entries(data || {})
      .map((keyVal) => ({
        key: keyVal[0],
        value: keyVal[1],
      }))
      .concat([{ key: "", value: "" }]);
  };

  const postProcessData = (data) => {
    data = data.filter((item) => item.key !== "" || item.value !== "");
    return data.reduce((obj, params) => {
      return { ...obj, [params.key]: params.value };
    }, {});
  };
  const [dictionary, setDictionary] = useState(
    data
      ? [...preProcessData(data), { key: "", value: "" }]
      : [{ key: "", value: "" }]
  );

  useEffect(() => {
    if (data) setDictionary(preProcessData(data));
  }, [data]);

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
    onChange(postProcessData(dictionary), dataType);
  };
  return (
    <div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="dark:text-white">Key</th>
            <th className="dark:text-white">Value</th>
          </tr>
        </thead>
        <tbody>
          {dictionary.map((item, index) => (
            <tr key={`table-${index}`}>
              <td className="w-1/2">
                <input
                  key={`key-${index}`}
                  className="w-full rounded dark:bg-gray-700 dark:text-white"
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
                  className="w-full rounded dark:bg-gray-700 dark:text-white"
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
