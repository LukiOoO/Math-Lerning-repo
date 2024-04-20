import React from "react";
import MakeTest from "../common/makeTestTemplate";

const MakeAdvancedTest = () => {
  return (
    <MakeTest
      testLvlApi={"mid"}
      resultLogicPath={"/tests/advanced/yourtest-result"}
      testLvl={"advanced"}
    />
  );
};

export default MakeAdvancedTest;
