import StartTest from "../common/startTest";
import MakeEasyTest from "./makeEasyTest";
import TestResultLogic from "./testResultLogic";

const StartEasyTest = () => {
  return (
    <StartTest
      component={MakeEasyTest}
      path={"/tests/easy/make-test"}
      testLvl={"easy"}
      resultLogicPath={"/tests/easy/yourtest-result"}
      resutlLComponent={TestResultLogic}
    />
  );
};

export default StartEasyTest;
