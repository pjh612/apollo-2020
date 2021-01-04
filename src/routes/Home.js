import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Movie from "../components/Movie";
import styled from "@emotion/styled";
const Conatiner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  background-color: black;
`;
const MoviesContainer = styled.div`
  justify-content: flex-start;
  margin-left: 80px;
  margin-right: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 50px;

  & > .loading {
    width: 100%;
    color: grey;
    text-align: center;
  }
`;
const GET_MOVIES = gql`
  {
    movies {
      id
      title
      medium_cover_image
      isLiked @client
    }
  }
`;
const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES);
  return (
    <Conatiner>
      <MoviesContainer>
        {loading && <span className="loading">loading...</span>}
        {data?.movies?.map((m) => (
          <Movie
            key={m.id}
            id={m.id}
            title={m.title}
            medium_cover_image={m.medium_cover_image}
            isLiked={m.isLiked}
          />
        ))}
      </MoviesContainer>
    </Conatiner>
  );
};
export default Home;
