import styled from "styled-components";

const Card = ({ post }) => {
  const Card = styled.div`
    margin-top: 20px;

    width: 30%;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0px 5px 33px -21px rgba(66, 68, 90, 1);
  `;

  const Title = styled.span`
    font-weight: bold;
    text-align: center;
    display: block;
  `;
  const Desc = styled.p`
    color: #333;
    margin-bottom: 20px;
    line-height: 25px;
    padding: 5px;
  `;
  const CardButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: paleturquoise;
    padding: 10px;
    color: black;
    font-weight: bold;
    cursor: pointer;
  `;

  const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    margin: 5px 0;
  `;

  return (
    <Card>
      <Title>{post.title}</Title>
      <Image src={post.img} />
      <Desc>{post.desc}</Desc>
      <CardButton>Read More</CardButton>
    </Card>
  );
};

export default Card;
