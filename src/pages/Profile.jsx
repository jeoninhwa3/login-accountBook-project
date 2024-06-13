import { useState } from "react";
import styled from "styled-components";
import { UpdateProfile } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

//styled-components
const StContainer = styled.div`
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding: 30px 20px;
    border-radius: 10px;
    background-color: #fff;
    button {
      width: 40%;
      margin-top: 20px;
      border: none;
      border-radius: 10px;
      padding: 10px 25px;
      cursor: pointer;
    }
  }
`;
const StInput = styled.input`
  width: 70%;
  border: 1px solid #dadada;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 15px;
  text-align: center;
  &:focus {
    border: 1px solid #dadada;
    outline: none;
  }
`;

const Profile = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleChangeProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    formData.append("avatar", avatar);
    const response = await UpdateProfile(formData);

    if (response.success) {
      setUser({
        ...user,
        nickname: response.nickname,
        avatar: response.avatar,
      });
      navigate("/");
    }
  };

  return (
    <StContainer>
      <form>
        <StInput
          type="text"
          placeholder="변경하고 싶은 닉네임을 적어주세요."
          minLength="1"
          maxLength="10"
          onChange={(e) => setNickname(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type="submit" onClick={handleChangeProfile}>
          프로필 변경
        </button>
      </form>
    </StContainer>
  );
};

export default Profile;
