import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  const Card = styled.div`
    margin: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 400px;
  `;

  const Title = styled.h4`
    margin: 10px 0px 0px 0px;
    font-weight: bold;
    text-align: center;
  `;
  const Desc = styled.p`
    color: #333;
    margin-bottom: 15px;
    line-height: 25px;
    padding: 5px;
  `;
  const CardButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #f58442;
    padding: 10px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  `;

  const Image = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
  `;

  const Header = styled.div`
    width: 100%;
  `;

  const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;
    min-height: 200px;
  `;

  const Tag = styled.span`
    border-radius: 50px;
    font-size: 12px;
    margin: 0;
    color: #fff;
    padding: 2px 10px;
    text-transform: uppercase;
    cursor: pointer;

    background: ${(props) =>
      props.color === "History"
        ? "#47bcd4"
        : props.color === "Populer"
        ? "#5e76bf"
        : "#cd5b9f"};
  `;

  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
  `;

  return (
    <Card>
      <StyledLink className="link" to={`/post/${post.id}`}>
        <Header>
          <Image src={post.img} />
        </Header>
        <Body>
          <Tag color={post.tag}>{post.tag}</Tag>
          <Title>{post.title}</Title>
          <Desc>{post.desc}</Desc>
          <CardButton>Read More</CardButton>
        </Body>
      </StyledLink>
    </Card>
  );
};

export default Card;
