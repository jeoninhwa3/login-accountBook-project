import { useState } from "react";
import styled from "styled-components";
import { UpdateProfile } from "../lib/api/auth";
import { useNavigate } from "react-router-dom";

//styled-components
const StContainer = styled.div`
  display: flex;
  justify-content: center;
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
        <input
          type="text"
          placeholder="닉네임"
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
