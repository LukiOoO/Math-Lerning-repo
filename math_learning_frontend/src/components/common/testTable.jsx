import React from "react";
import TestTableHeader from "./testTableHeader";
import TableBody from "./testTableBody";

const Table = ({ tests, inputValues, setInputValues }) => {
  return (
    <table>
      <TestTableHeader />
      <TableBody
        tests={tests}
        inputValues={inputValues}
        setInputValues={setInputValues}
      />
    </table>
  );
};
export default Table;
