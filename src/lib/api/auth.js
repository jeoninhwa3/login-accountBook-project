import axios from "axios";

const AUTH_API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원 정보 서버로 보내기
export const register = async ({ id, password, nickname }) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/register`, {
      id: id,
      password: password,
      nickname: nickname,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

// 로그인
export const signIn = async ({ id, password }) => {
  try {
    const response = await axios.post(`${AUTH_API_URL}/login?expiresIn=10m`, {
      id: id,
      password: password,
    });
    localStorage.setItem("accessToken", response.data.accessToken);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

// 유저정보 확인
export const getUser = async () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    try {
      const response = await axios.get(`${AUTH_API_URL}/user`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      alert(error.response.data.message);
      localStorage.clear();
    }
  }
};
