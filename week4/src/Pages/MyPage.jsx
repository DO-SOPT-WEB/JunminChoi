import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const MyPage = () => {
  const params = useParams();
  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");

  useEffect(() => {
    const response = async () => {
      try {
        const information = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/members/${params.userId}`
        );
        setUserId(information.data.username);
        setNickName(information.data.nickname);
      } catch (e) {
        console.log(e);
      }
    };
    response();
  }, [params.userId]);

  return (
    <Container>
      <h1>MY PAGE</h1>
      <section>ID:{userId}</section>
      <section>닉네임:{nickName}</section>
      <Button to="/Login"> 로그아웃 </Button>
    </Container>
  );
};

export default MyPage;

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
