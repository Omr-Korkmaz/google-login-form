import React from 'react'
import dumydata from '../dumydata';
import Card from '../components/Card'
import styled from 'styled-components';

const Home = () => {

const HomeContainer = styled.div`
display: flex;
justify-content: center;
`

  return (
    <HomeContainer>
        {dumydata.map(post=>(
       <Card  post = {post} />
        ))}
    </HomeContainer>
  )}


export default Home;