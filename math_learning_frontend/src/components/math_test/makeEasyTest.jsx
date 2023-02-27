import React from "react";
import MakeTest from "../common/makeTestTemplate";

const MakeEasyTest = () => {
  return (
    <MakeTest
      testLvlApi={"es"}
      resultLogicPath={"/tests/easy/yourtest-result"}
      testLvl={"easy"}
    />
  );
};

export default MakeEasyTest;
