import StartTest from "../common/startTest";
import MakeHardTest from "./makeHardTest";
import TestResultLogic from "./testResultLogic";

const StartHardTest = () => {
  return (
    <StartTest
      component={MakeHardTest}
      path={"/tests/hard/make-test"}
      testLvl={"hard"}
      resultLogicPath={"/tests/hard/yourtest-result"}
      resutlLComponent={TestResultLogic}
    />
  );
};

export default StartHardTest;
