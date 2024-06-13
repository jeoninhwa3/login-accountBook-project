import styled from "styled-components";
import Header from "./Header";
import { getUser } from "../../lib/api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// styled components
const StContainer = styled.div`
  position: relative;
  width: 1200px;
  height: 700px;
  padding-bottom: 30px;
  background-color: #05b38f;
  border: 7px solid #fff;
  border-radius: 50px;
  box-shadow: 10px 10px 20px #eee;
  overflow-y: auto;
`;

const StMain = styled.main`
  margin-top: 130px;
`;

const Layout = ({ children, user, setUser }) => {
  const navigate = useNavigate();
  useEffect(() => {
    getUser().then((res) => {
      if (res) {
        setUser({
          userId: res.id,
          nickname: res.nickname,
          avatar: res.avatar,
        });
      } else {
        setUser(null);
        navigate("/login");
        localStorage.clear();
      }
    });
  }, []);
  return (
    <StContainer>
      <Header user={user} setUser={setUser} />
      <StMain>{children}</StMain>
    </StContainer>
  );
};

export default Layout;
