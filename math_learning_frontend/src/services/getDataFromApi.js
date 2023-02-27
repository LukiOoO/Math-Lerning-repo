import { useEffect } from "react";
import axios from "axios";

export const useGetExercise = ({ url, setData }) => {
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
  }, [setData, url]);
};

export const useGetTest = ({ testLvlApi, setTests }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/test/get-${testLvlApi}-test/`,
          {
            headers: {
              Authorization: "JWT " + localStorage.getItem("jwtToken"),
            },
          }
        );
        const data = await response.json();
        setTests(data["Your Test"]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [testLvlApi, setTests]);
};

export const useGetScore = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://127.0.0.1:8000/score/");
        setData(result.data);
      } catch (error) {}
    };

    fetchData();
  }, [setData]);
};

export const useGetUserData = ({ setData }) => {
  useEffect(() => {
    const fetchData = () => {
      fetch("http://127.0.0.1:8000/mathuser/userdata/me/", {
        headers: {
          Authorization: "JWT " + localStorage.getItem("jwtToken"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    };

    const intervalId = setInterval(fetchData, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [setData]);
};

export const useGetUserScore = ({ setLastTests }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/mathuser/show-user-score/", {
      headers: {
        Authorization: "JWT " + localStorage.getItem("jwtToken"),
      },
    })
      .then((response) => response.json())
      .then((data) => setLastTests(data))
      .catch((error) => console.error(error));
  }, [setLastTests]);
};