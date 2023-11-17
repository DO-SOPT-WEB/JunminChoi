import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";

const Login = () => {
  const [loginUserId, setLoginUserId] = useState("");
  const [loginPassWord, setLoginPassWord] = useState("");
  const navigate = useNavigate();
  const [fail, setFail] = useState("");
  const [open, setOpen] = useState(false);
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members/sign-in`,
        {
          username: loginUserId,
          password: loginPassWord,
        }
      );
      response && navigate(`/MyPage/${response.data.id}`);
    } catch (e) {
      setFail(e.response.data.message);
      setOpen(true);
      setTimeout(() => setOpen(false), 3000);
    }
  };

  return (
    <>
      <Container>
        <h1>Login</h1>
        <section>
          ID
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            value={loginUserId}
            onChange={(e) => setLoginUserId(e.target.value)}
          />
        </section>
        <section>
          PASSWORD
          <input
            type="text"
            placeholder="비밀번호 입력해주세요"
            value={loginPassWord}
            onChange={(e) => setLoginPassWord(e.target.value)}
          />
        </section>

        <Button type="button" onClick={handleLogin}>
          로그인{" "}
        </Button>

        <Button type="button" to="/SignUp">
          회원가입{" "}
        </Button>
      </Container>

      {open &&
        createPortal(<Toast>{fail}</Toast>, document.getElementById("toast"))}
    </>
  );
};
export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Toast = styled.div`
  background-color: black;
  color: white;
`;

const Button = styled(Link)`
  background-color: black;
  color: white;

  margin: 1px;
  font-size: 1rem;

  text-decoration: none;
`;
