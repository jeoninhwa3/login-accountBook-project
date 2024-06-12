import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { signIn } from "../lib/api/auth";

// styled components
const StContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 30px 20px;
  border-radius: 10px;
  background-color: #fff;
`;
const StInput = styled.input`
  width: 70%;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 15px;
  &:focus {
    border: 1px solid #dadada;
    outline: none;
  }
`;
const StbtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const StLoginBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px 25px;
  cursor: pointer;
`;
const StJoinBtn = styled.button`
  border: none;
  border-radius: 10px;
  padding: 10px;
  margin-top: 5px;
  background-color: inherit;
  cursor: pointer;
`;

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const response = await signIn({
      id: id,
      password: password,
    });

    if (response) {
      navigate("/");
      alert("로그인 되었습니다.");
    }
  };
  return (
    <StContainer>
      <StForm onSubmit={handleLogin}>
        <StInput
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <StInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StbtnBox>
          <StLoginBtn type="submit">로그인</StLoginBtn>
          <StJoinBtn type="button" onClick={() => navigate("/join")}>
            회원가입
          </StJoinBtn>
        </StbtnBox>
      </StForm>
    </StContainer>
  );
};

export default Login;
