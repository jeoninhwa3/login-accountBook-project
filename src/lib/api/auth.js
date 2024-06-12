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
    const response = await axios.post(`${AUTH_API_URL}/login`, {
      id: id,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
