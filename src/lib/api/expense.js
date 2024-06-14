import axios from "axios";

const JSON_SERVER_URL = "http://localhost:5000";

// 지출 데이터 조회
export const getExpenses = async () => {
  try {
    const response = await axios.get(`${JSON_SERVER_URL}/expenses`);
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

// 디테일 페이지 지출 데이터 조회
export const getExpensesDetail = async ({ queryKey }) => {
  try {
    const response = await axios.get(
      `${JSON_SERVER_URL}/expenses/${queryKey[1]}`
    );
    return response;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

// 지출 데이터 등록
export const addExpenses = async (newExpense) => {
  try {
    const response = await axios.post(
      `${JSON_SERVER_URL}/expenses`,
      newExpense
    );
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};
// 디테일 페이지 지출 데이터 수정
export const updateExpenses = async (updatedExpense) => {
  const { id, ...rest } = updatedExpense;
  try {
    const response = await axios.put(`${JSON_SERVER_URL}/expenses/${id}`, rest);
    return response.data;
  } catch (error) {
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};
// 디테일 페이지 지출 데이터 삭제
export const deleteExpenses = async (id) => {
  try {
    const response = await axios.delete(`${JSON_SERVER_URL}/expenses/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
