import React from "react";
import {
  HardAdding,
  HardSubtraction,
  HardMultiplication,
  HardDividing,
} from "./hardExComponents";
import ExTemplate from "../common/exTemplate";

const HardExercises = () => {
  return (
    <ExTemplate
      h1title="Hard"
      lvl="hard"
      addComponent={HardAdding}
      subComponent={HardSubtraction}
      mulComponent={HardMultiplication}
      divComponent={HardDividing}
    />
  );
};

export default HardExercises;
