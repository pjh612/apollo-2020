import React from "react";
import { useParams } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import Detail from "../components/Detail";
import styled from "@emotion/styled";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      language
      rating
      medium_cover_image
      large_cover_image
      description_intro
      genres
      year
      runtime
      isLiked @client
    }
    suggestions(id: $id) {
      id
      title
      language
      rating
      medium_cover_image
      description_intro
      genres
      year
      runtime
    }
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Loading = styled.span`
  margin-top: 50px;
  color: grey;

  text-align: center;
`;
const Detail_ = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });
  return (
    <Container>
      {loading ? (
        <Loading>loading...</Loading>
      ) : (
        <Detail id={id} movie={data?.movie} suggestions={data?.suggestions} />
      )}
    </Container>
  );
};
export default Detail_;
