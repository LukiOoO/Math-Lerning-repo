import StartTest from "../common/startTest";
import MakeAdvancedTest from "./makeAdvancedTest";
import TestResultLogic from "./testResultLogic";

const StartAdvancedTest = () => {
  return (
    <StartTest
      component={MakeAdvancedTest}
      path={"/tests/advanced/make-test"}
      testLvl={"advanced"}
      resultLogicPath={"/tests/advanced/yourtest-result"}
      resutlLComponent={TestResultLogic}
    />
  );
};

export default StartAdvancedTest;
