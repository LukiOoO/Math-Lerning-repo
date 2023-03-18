import { useEffect } from "react";
import axios from "axios";

export const getExercise = ({ url, setData }) => {
  const fetchData = async () => {
    try {
      const result = await axios.get(url);
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
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

export const useGetUserData = ({ setData, history }) => {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/mathuser/userdata/me/", {
      headers: {
        Authorization: "JWT " + localStorage.getItem("jwtToken"),
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("jwtToken");
          localStorage.removeItem("jwtRefreshToken");
          localStorage.removeItem("nickname");
          history.go(0);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, [setData, history]);
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
