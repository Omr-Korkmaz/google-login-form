import React from "react";
import styled from "styled-components";

const Navbar = () => {

  const Navbar = styled.div`
    height: 50px;
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

  return (
    <Navbar>
      <Logo>SAMPLE APP</Logo>

      <List className="list">
        <ListItem className="listItem">
          <img alt="" className="avatar" />
        </ListItem>
        <ListItem>Someone</ListItem>
        <ListItem>Logout</ListItem>
      </List>
    </Navbar>
  );
};

export default Navbar;
