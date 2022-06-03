import styled from "styled-components";

const Login = () => {
  const Login = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Wrapper = styled.div`
    width: 60%;
    height: 45%;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
    display: flex;
    align-items: center;
    border-radius: 20px;
  `;

  const LeftSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const RightSide = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const Center = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  `;

  const Or = styled.div`
    border: 2px solid lightgray;
    border-radius: 50%;
    padding: 10px;
    color: gray;
    background-color: white;
    font-weight: bold;
  `;

  const Line = styled.div`
    width: 0.5px;
    height: 70%;
    background-color: lightgray;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: -1;
  `;

  const LoginButton = styled.div`
    width: 150px;
    padding: 15px 25px;
    border-radius: 5px;
    color: white;
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: 20px;
    cursor: pointer;
  `;

  const Google = styled(LoginButton)`
    background-color: #df4930;
  `;
  const Facebook = styled(LoginButton)`
    background-color: #507cc0;
  `;
  const Github = styled(LoginButton)`
    background-color: black;
  `;

  const Input = styled.input`
    width: 200px;
    padding: 15px 20px;
    margin-bottom: 20px;
  `;
  const Submit = styled.button`
    width: 200px;
    background-color: purple;
    color: white;
    font-weight: bold;
    border: none;
    padding: 15px 20px;
    border-radius: 5px;
  `;
  const LoginTitle = styled.h1`
    position: absolute;
    top: 250px;
    color: gray;
  `;

  return (
    <Login>
      <LoginTitle>Login Method</LoginTitle>
      <Wrapper>
        <LeftSide>
          <Google>Google</Google>
          <Facebook>Facebook</Facebook>
          <Github>Github</Github>
        </LeftSide>
        <Center>
          <Line />
          <Or>OR</Or>
        </Center>
        <RightSide>
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Password" />
          <Submit className="submit">Login</Submit>
        </RightSide>
      </Wrapper>
    </Login>
  );
};

export default Login;
