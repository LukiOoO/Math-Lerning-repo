import React from "react";

const TestTableRow = ({ test, index, inputValues, setInputValues }) => {
  return (
    <tr key={index}>
      <td>{test.a}</td>
      <td>{test.operator}</td>
      <td>{test.b}</td>
      <td>
        =
        <input
          type="number"
          value={inputValues[index] || ""}
          onChange={(e) =>
            setInputValues({
              ...inputValues,
              [index]: e.target.value,
            })
          }
        />
      </td>
    </tr>
  );
};
export default TestTableRow;
