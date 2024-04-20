import React from "react";
import MakeTest from "../common/makeTestTemplate";

const MakeHardTest = () => {
  return (
    <MakeTest
      testLvlApi={"hard"}
      resultLogicPath={"/tests/hard/yourtest-result"}
      testLvl={"hard"}
    />
  );
};

export default MakeHardTest;
