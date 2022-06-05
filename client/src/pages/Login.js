import styled from "styled-components";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";

const Login = () => {
  const Login = styled.div`
  
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Wrapper = styled.div`
  margin:30px;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    width: 500px;
    height: 500px;
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 20px;
  `;
  const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `;

  const LoginButton = styled.div`
    border: 1px solid black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    width: 20px;
    height: 20px;

    margin: 4px 15px;
    cursor: pointer;
    &:hover {
      background-color: gray;
      border: 1px solid green;
    }
  `;

  const Google = styled(LoginButton)`
    border-radius: 50%;
  `;
  const Facebook = styled(LoginButton)`
    border-radius: 50%;
  `;
  const Github = styled(LoginButton)`
    border-radius: 50%;
  `;

  const Input = styled.input`
    border-radius: 20px;
    width: 250px;
    padding: 15px 20px;
    margin-bottom: 20px;
    background-color: #eee;
    border: none;
    margin: 8px 0;
  `;
  const Submit = styled.button`
    margin: 4px 0px;
    border-radius: 20px;
    background-color: #ff4b2b;
    border: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 50px;
    letter-spacing: 1.2px;
    &:hover {
      background-color: green;
    }
  `;

  const LoginTitle = styled.h1`
    color: gray;
  `;

  const LoginText = styled.p`
    color: gray;

    font-size: 1rem;
  `;
  const ForgetText = styled(LoginText)`
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: green;
    }
  `;

  const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <Login>
      <Wrapper>
        <LoginTitle>Sign in</LoginTitle>
        <IconWrapper>
          <Google onClick={google}>
            {" "}
            <GoogleIcon />{" "}
          </Google>
          <Facebook>
            <FacebookIcon />{" "}
          </Facebook>
          <Github>
            <GitHubIcon />
          </Github>
        </IconWrapper>
        <LoginText> or use your account</LoginText>
        <Input type="text" placeholder="Username" />
        <Input type="text" placeholder="Password" />
        <ForgetText>forget password</ForgetText>
        <Submit className="submit">Login</Submit>
      </Wrapper>
    </Login>
  );
};

export default Login;
