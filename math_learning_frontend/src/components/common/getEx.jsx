import React, { useState } from "react";
import NextBtn from "./nextBtn";
import CustomInput from "./customInput";
import { useGetExercise } from "../../services/getDataFromApi";

const GetEx = ({ sing, url }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputColor, setInputColor] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (parseInt(event.target.value) === data.result) {
      setInputColor("green");
    } else {
      setInputColor("red");
    }
  };

  useGetExercise({ url, setData });

  return (
    <React.Fragment>
      <div className="number-main-container">
        <div className="number-container">{data.a}</div> {sing}
        <div className="number-container">{data.b}</div> =
      </div>
      <CustomInput
        style={{ backgroundColor: inputColor }}
        type="number"
        className="number-input"
        id="input-num"
        value={inputValue}
        onChange={handleInputChange}
      />

      <NextBtn value="NEXT" id="next-btn" />
    </React.Fragment>
  );
};

export default GetEx;
