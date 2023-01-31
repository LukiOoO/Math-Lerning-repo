import axios from "axios";

async function login(username, password) {
  try {
    const response = await axios.post("http://localhost:8000/api-token-auth/", {
      username,
      password,
    });

    return response.data.token;
  } catch (error) {
    console.error(error);
  }
}
