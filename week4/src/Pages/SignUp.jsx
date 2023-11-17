import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userId, setUserId] = useState("");
  const [passWord, setPassWord] = useState("");
  const [nickName, setNickName] = useState("");
  const [isExist, setIsExist] = useState(null);

  const navigate = useNavigate();

  const idCheck = async () => {
    try {
      const idChecker = await axios.get(
        `${
          import.meta.env.VITE_BASE_URL
        }/api/v1/members/check?username=${userId}`
      );
      setIsExist(idChecker.data.isExist);
    } catch (e) {
      console.log(e);
    }
  };

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
        <Button
          onClick={idCheck}
          className={
            isExist === null ? null : isExist === true ? "red" : "green"
          }
        >
          중복체크
        </Button>
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
      {userId === "" ||
      passWord === "" ||
      nickName === "" ||
      isExist == true ? (
        <Button onClick={handleSignUp} disabled>
          회원가입{" "}
        </Button>
      ) : (
        <Button onClick={handleSignUp}>회원가입 </Button>
      )}
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

const Button = styled.button`
  background-color: black;
  color: white;

  margin: 1px;
  font-size: 1rem;

  text-decoration: none;

  &.red {
    background-color: red;
  }
  &.green {
    background-color: green;
  }
`;
