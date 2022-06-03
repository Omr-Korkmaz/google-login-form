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

  return (
    <Post>
      <PostImg src={dumydata[1].img} />

      <PostTitle>{dumydata[1].title}</PostTitle>
      <PostDesc>{dumydata[1].desc}</PostDesc>
      <PostLongDesc>{dumydata[1].longDesc}</PostLongDesc>
    </Post>
  );
};

export default Post;
