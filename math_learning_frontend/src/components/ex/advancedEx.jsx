import React from "react";
import {
  AdAdding,
  AdSubtraction,
  AdMultiplication,
  AdDividing,
} from "./advancedExComponents";
import ExTemplate from "../common/exTemplate";

const AdvancedExercises = () => {
  return (
    <ExTemplate
      h1title="Advanced"
      lvl="advanced"
      addComponent={AdAdding}
      subComponent={AdSubtraction}
      mulComponent={AdMultiplication}
      divComponent={AdDividing}
    />
  );
};

export default AdvancedExercises;
