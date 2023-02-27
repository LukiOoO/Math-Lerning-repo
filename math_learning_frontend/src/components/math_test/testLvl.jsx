import React from "react";
import GetLvl from "../common/gteLvl";
import StartEasyTest from "./startEsTest";
import StartAdvancedTest from "./startAdvancedTest";
import StartHardTest from "./startHardTest";

const TestLvl = () => {
  const routeAndPath = [
    { path: "/tests/easy", component: StartEasyTest },
    { path: "/tests/advanced", component: StartAdvancedTest },
    { path: "/tests/hard", component: StartHardTest },
  ];
  return <GetLvl routeAndPath={routeAndPath} />;
};

export default TestLvl;
