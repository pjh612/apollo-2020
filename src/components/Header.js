import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
const Container = styled.div`
  display: flex;

  text-align: center;
  font-size: 32px;
  font-weight: 600;
  justify-content: center;
  background: black; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #414345,
    black
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #414345,
    black
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  & > a {
    color: red;
    text-decoration: none;
  }
  padding: 50px 0 50px 0;
  border-bottom: 10px solid #222222;
`;
const Header = () => {
  return (
    <Container>
      <Link to="/">Welcome! This is JH's Movie App With Apollo 2020!!</Link>
    </Container>
  );
};

export default Header;
