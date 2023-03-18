import React, { useState, useEffect } from "react";
import CustomInput from "./customInput";
import { getExercise } from "../../services/getDataFromApi";
import MathSiteBtn from "./mathSiteBtn";

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
  const firstEx = (setData, url) => {
    getExercise({ url, setData });
  };

  useEffect(() => {
    firstEx(setData, url);
  }, [setData, url]);

  const useHadnleClick = () => {
    getExercise({ url, setData });
    setInputValue("");
    setInputColor();
  };

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

      <MathSiteBtn
        type="button"
        className="btn-next"
        value="NEXT"
        id="next-btn"
        onClick={useHadnleClick}
      />
    </React.Fragment>
  );
};

export default GetEx;
