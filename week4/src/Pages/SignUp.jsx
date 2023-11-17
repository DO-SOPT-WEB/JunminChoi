import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [nickName, setNickName] = useState("");

  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/v1/members`,
        {
          username: userId,
          nickname: nickName,
          password: passWord,
        }
      );
      response && navigate("/login");
      console.log("회원가입완료");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <h1>SingUp</h1>
      <section>
        ID{" "}
        <input
          type="text"
          placeholder="아이디를 입력해주세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <button>중복체크</button>
      </section>
      <section>
        비밀번호
        <input
          type="text"
          placeholder="비밀번호를 입력해주세요"
          value={passWord}
          onChange={(e) => setPassWord(e.target.value)}
        />
      </section>
      <section>
        닉네임
        <input
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
        />
      </section>
      <MoveButton onClick={handleSignUp}>회원가입 </MoveButton>
    </Container>
  );
};

export default SignUp;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MoveButton = styled.button`
  background-color: black;
  color: white;

  margin: 1px;
  font-size: 1rem;

  text-decoration: none;
`;
