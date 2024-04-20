import React from "react";
import {
  EasyAdding,
  EasySubtraction,
  EasyMultiplication,
  EasyDividing,
} from "./easyExComponents";
import ExTemplate from "./../common/exTemplate";

const EasyExercises = () => {
  return (
    <ExTemplate
      h1title="Easy"
      lvl="easy"
      addComponent={EasyAdding}
      subComponent={EasySubtraction}
      mulComponent={EasyMultiplication}
      divComponent={EasyDividing}
    />
  );
};

export default EasyExercises;
