import TestTableRow from "./testTableRow";

const TableBody = ({ tests, inputValues, setInputValues }) => {
  return (
    <tbody>
      {tests.map((test, index) => (
        <TestTableRow
          key={index}
          test={test}
          index={index}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      ))}
    </tbody>
  );
};
export default TableBody;
