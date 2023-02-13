import React, { useState, useEffect } from "react";
import axios from "axios";
import NextBtn from "../common/nextBtn";
import CustomInput from "../common/customInpu";

const GetEx = ({ sing, url }) => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [inputColor, setInputColor] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(url);
        setData(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    if (parseInt(event.target.value) === data.result) {
      setInputColor("green");
    } else {
      setInputColor("red");
    }
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

      <NextBtn value="NEXT" id="next-btn" />
    </React.Fragment>
  );
};

export default GetEx;