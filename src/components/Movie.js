import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

const LIKE_MOVIE = gql`
  mutation toggleLikeMovie($id: Int!, $isLiked: Boolean!) {
    toggleLikeMovie(id: $id, isLiked: $isLiked) @client
  }
`;
const Container = styled.div`
  height: 420px;
  width: 230px;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 30px;
  & > a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-weight: 600;
    color: grey;
  }
  & > button {
    background-color: black;
    color: white;
    border-radius: 6px;
    outline: 0;
  }
`;
const Poster = styled.div`
  width: 100%;
  height: 345px;
  background-image: url(${(props) => props.bg});
  border-radius: 12px;
  box-shadow: 20px 20px 30px #333333;
  margin-bottom: 20px;
  &:hover {
    transform: scale(1.1);
    transition: all ease 0.5s;
  }
`;

const Movie = ({ id, title, medium_cover_image, isLiked }) => {
  const [toggleLikeMovie] = useMutation(LIKE_MOVIE, {
    variables: { id: parseInt(id), isLiked },
  });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster bg={medium_cover_image} />
        <span>{title}</span>
      </Link>
      <button onClick={toggleLikeMovie}>{isLiked ? "Unlike" : "Like"}</button>
    </Container>
  );
};

export default Movie;
