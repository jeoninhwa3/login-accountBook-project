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
      <div>
        <>
          <button onClick={() => navigate("/profile")}>my profile</button>
          <div>
            <img src={user?.avatar} alt="user avatar" width={50} />
            <span>{user?.nickname}</span>
          </div>
          <button onClick={handleLogout}>logout</button>
        </>
      </div>
    </StHeader>
  );
};

export default Header;
