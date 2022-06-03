import styled from "styled-components";

const Navbar = () => {
  const Navbar = styled.div`
    height: 70px;
    background-color: plum;
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

  return (
    <Navbar>
      <Logo>SAMPLE APP</Logo>

      <List>
        <ListItem>
          <Avatar
            src={
              "https://images.unsplash.com/photo-1648737966100-18f790c93a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3174&q=80"
            }
          />
        </ListItem>
        <ListItem>Someone</ListItem>
        <ListItem>Logout</ListItem>
      </List>
    </Navbar>
  );
};

export default Navbar;
