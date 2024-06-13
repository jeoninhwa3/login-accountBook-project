import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// styled-components
const StHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 50px;
  width: calc(100% - 100px);
  h1 {
    color: #fff;
    font-size: 50px;
    font-weight: 700;
    cursor: pointer;
  }
`;
const StHeaderBtns = styled.div`
  display: flex;
  button {
    line-height: 42px;
    margin-left: 10px;
    border: none;
    background-color: inherit;
    color: #eee;
    font-size: 16px;
    cursor: pointer;
  }
`;
const StProfileBox = styled.div`
  display: flex;
  align-items: center;
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
  > span {
    display: inline-block;
    line-height: 42px;
    margin-left: 10px;
    color: #fff;
    font-size: 16px;
  }
`;

const Header = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
    localStorage.clear();
  };

  return (
    <StHeader>
      <h1 onClick={() => navigate("/")}>Account Book</h1>
      <StHeaderBtns>
        {/* user 정보가 있을 때만 아래 버튼들 생성 */}
        {user && (
          <>
            <StProfileBox>
              <img src={user?.avatar} alt="user avatar" />
              <span>{user?.nickname} 님 안녕하세요!</span>
            </StProfileBox>
            <button onClick={() => navigate("/profile")}>my profile</button>
            <button onClick={handleLogout}>logout</button>
          </>
        )}
      </StHeaderBtns>
    </StHeader>
  );
};

export default Header;
