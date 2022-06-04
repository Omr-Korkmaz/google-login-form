import { useLocation } from "react-router-dom";
import styled from "styled-components";
import dumydata from "../dumydata";

const Post = () => {
  const Post = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const PostTitle = styled.h1``;

  const PostImg = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 20px;
  `;


  const PostDesc = styled.p`
    padding: 0 100px;
    font-size: 24px;
    font-weight: 300;
    color: gray;
    margin-top: 50px;
  `;

  const PostLongDesc = styled.p`
    padding: 100px;
    padding-top: 50px;
    font-size: 18px;
    line-height: 24px;
  `;


const location = useLocation();
const path = location.pathname.split("/")[2];

const post = dumydata.find((post) => post.id.toString() === path);

console.log(location);

  return (
    <Post>
      <PostImg src={post.img} />

      <PostTitle>{post.title}</PostTitle>
      <PostDesc>{post.desc}</PostDesc>
      <PostLongDesc>{post.longDesc}</PostLongDesc>
    </Post>
  );
};

export default Post;
