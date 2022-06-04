import React from "react";
import dumydata from "../dumydata";
import Card from "../components/Card";
import styled from "styled-components";

const Home = () => {
  const HomeContainer = styled.div`
   display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  `;

  return (
    <HomeContainer>
      {dumydata.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </HomeContainer>
  );
};

export default Home;
