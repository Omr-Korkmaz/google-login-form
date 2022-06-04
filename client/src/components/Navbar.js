import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  const Navbar = styled.div`
    height: 70px;
    background-color: #f58442;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;

  const Logo = styled.span`
    font-size: 20px;
    font-weight: bold;
  `;

  const List = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
  `;

  const ListItem = styled.li`
    margin-right: 20px;
    font-weight: 500;
    cursor: pointer;
  `;
  const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  `;
  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
  `;
  const logout = () => {
    window.open("http://localhost:4000/auth/logout", "_self");
  };
  return (
    <Navbar>
      <Logo>
        {" "}
        <StyledLink to="/"> Sample LOGO</StyledLink>
      </Logo>
      {user ? (
        <List>
          <ListItem>
            <Avatar src={user.photos[0].value} />
          </ListItem>
          <ListItem>{user.displayName}</ListItem>
          <ListItem onClick={logout}>Logout</ListItem>
        </List>
      ) : (
        <StyledLink to="/login"> Login</StyledLink>
      )}
    </Navbar>
  );
};

export default Navbar;
