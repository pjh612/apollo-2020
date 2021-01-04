import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  margin-bottom: 25px;
`;
const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 500px);
  & > .sub {
    font-weight: 600;
    margin-bottom: 12px;
  }
  & > .title {
    font-size: 48px;
    font-weight: 700;
  }
  & > div > .content {
    color: grey;
  }
  & > .subContent {
    margin-bottom: 20px;
  }
`;
const Poster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 500px;
  height: 750px;
  border-radius: 12px;
  box-shadow: 20px 20px 30px #333333;
  margin-right: 15px;
`;
const SuggestionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  flex-direction: column;
  & > div {
    display: flex;
    flex-direction: column;
  }
  & > .Header {
    font-size: 48px;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }

  & > .suggestionMovies {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    & > a {
      text-decoration: none;
      color: white;
    }
    & > a > .suggestionMovie {
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      & > .rating {
        color: grey;
      }
    }
  }
`;
const SuggestionPoster = styled.div`
  background-image: url(${(props) => props.bg});
  width: 245px;
  height: 345px;
`;
const Detail = ({ id, movie, suggestions }) => {
  return (
    <>
      <Container>
        <Poster bg={movie.large_cover_image} />
        <RightContainer>
          <span className="sub title">
            {movie.title} {movie.isLiked ? "💖" : "🖤"}
          </span>
          <div className="subContent">
            <span className="sub year">개봉 년도 : </span>
            <span className="content">{movie.year}</span>
          </div>
          <div className="subContent">
            <span className="sub genres">장르 : </span>
            <span className="content">
              {movie.genres.map((genre, idx) =>
                idx !== movie.genres.length - 1 ? genre + "," : genre
              )}
            </span>
          </div>
          <div className="subContent">
            <span className="sub lan">언어 : </span>
            <span className="content">{movie.language}</span>
          </div>
          <div className="subContent">
            <span className="sub rating">평점 : </span>
            <span className="content">{movie.rating}</span>
          </div>
          <div className="subContent">
            <span className="sub runtime">상영 시간 : </span>
            <span className="content">{movie.runtime}</span>
          </div>
          <div className="subContent">
            <span className="sub des">소개 : </span>
            <span className="content">{movie.description_intro}</span>
          </div>
        </RightContainer>
      </Container>
      <SuggestionsContainer>
        <div className="Header">관련 추천 영화</div>
        <div className="suggestionMovies">
          {suggestions.map((s) => (
            <Link to={`/${s.id}`} key={s.id}>
              <div className="suggestionMovie">
                <SuggestionPoster bg={s.medium_cover_image} />
                <span>{s.title}</span>
                <span className="rating">평점 : {s.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </SuggestionsContainer>
    </>
  );
};

export default Detail;
