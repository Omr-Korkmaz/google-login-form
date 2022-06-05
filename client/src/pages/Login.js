import styled from "styled-components";
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';


const Login = () => {
  const Login = styled.div`
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Wrapper = styled.div`

border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    width: 40%;
    height: 45%;
    flex-direction: column;
    display: flex;
    align-items: center;
    border-radius: 20px;

  
  
  `;
    const IconWrapper = styled.div`
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    $
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
   
border: 1px solid black;
padding: 10px;
    align-items: center;
    font-weight: bold;

    margin: 50px 10px 10px 10px;
    cursor: pointer;
    &:hover {
      background-color: green;
      border-color: green;
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
    margin: 10px 0px;
    border-radius: 20px;
    background-color: #ff4b2b;
    border: none;
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
    padding: 12px 50px;
    letter-spacing: 1.2px;
    &:hover {
      background-color: palevioletred;
    }
  `;

  const LoginTitle = styled.h1`
    position: absolute;
    top: 250px;
    color: gray;
  `;


const google = () => {
    window.open("http://localhost:4000/auth/google", "_self");
  };

  return (
    <Login>
      <LoginTitle>Sign in</LoginTitle>
      <Wrapper>
      <IconWrapper>

          <Google onClick={google} > <GoogleIcon/> </Google>
          <Facebook><FacebookIcon /> </Facebook>
          <Github><GitHubIcon/></Github>
      </IconWrapper>
       
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Password" />
          <Submit className="submit">Login</Submit>
      </Wrapper>
    </Login>
  );
};

export default Login;
