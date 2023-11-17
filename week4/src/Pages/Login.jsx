import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUserId, setLoginUserId] = useState("");
  const [loginPassWord, setLoginPassWord] = useState("");
  const navigate = useNavigate();

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
      console.log(e);
    }
  };

  return (
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
  );
};
export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Button = styled(Link)`
  background-color: black;
  color: white;

  margin: 1px;
  font-size: 1rem;

  text-decoration: none;
`;
