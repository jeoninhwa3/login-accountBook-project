import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../lib/api/auth";

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

const Join = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSignup = async () => {
    // API 호출
    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });
    if (response) {
      navigate("/login");
      confirm("회원가입이 완료되었습니다.");
    }
  };
  return (
    <StContainer>
      <StForm>
        <StInput
          minLength="4"
          maxLength="10"
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <StInput
          minLength="4"
          maxLength="15"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StInput
          minLength="1"
          maxLength="10"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <StbtnBox>
          <StLoginBtn type="button" onClick={handleSignup}>
            회원가입
          </StLoginBtn>
          <StJoinBtn type="button" onClick={() => navigate(-1)}>
            뒤로가기
          </StJoinBtn>
        </StbtnBox>
      </StForm>
    </StContainer>
  );
};

export default Join;
