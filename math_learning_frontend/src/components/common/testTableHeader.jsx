const TestTableHeader = () => {
  return (
    <thead>
      <tr>
        <th>A</th>
        <th colSpan={2}>B</th>
        <th>Result</th>
      </tr>
    </thead>
  );
};

export default TestTableHeader;
