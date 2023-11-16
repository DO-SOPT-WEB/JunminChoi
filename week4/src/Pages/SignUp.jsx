const SignUp = () => {
  return (
    <>
      <h1>SingUp</h1>
      <section>
        ID <input type="text" placeholder="아이디를 입력해주세요 "></input>
        <input type="button">중복체크</input>
      </section>
      <section>
        비밀번호{" "}
        <input type="text" placeholder="비밀번호를 입력해주세요"></input>
      </section>
      <section>
        비밀번호 확인
        <input
          type="text"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        ></input>
      </section>
      <section>
        닉네임<input type="text" placeholder="닉네임을 입력해주세요"></input>
      </section>
      <input type="button">로그인</input>
      <input type="button">회원가입</input>
    </>
  );
};

export default SignUp;
