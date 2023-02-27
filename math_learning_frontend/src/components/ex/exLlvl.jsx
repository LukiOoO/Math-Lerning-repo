import React from "react";
import AdvancedExercises from "./advancedEx";
import EasyExercises from "./easyEx";
import HardExercises from "./hardEx";
import GetLvl from "../common/gteLvl";
const ExLvl = () => {
  const routeAndPath = [
    { path: "/exercises/easy", component: EasyExercises },
    { path: "/exercises/advanced", component: AdvancedExercises },
    { path: "/exercises/hard", component: HardExercises },
  ];
  return <GetLvl routeAndPath={routeAndPath} />;
};

export default ExLvl;
