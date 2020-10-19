import styled from "styled-components";

export const StyledLink = styled.a`
  display: block;
  border: 1px solid #aaa;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 0.4rem 0.6rem;
  margin-bottom: 0.4rem;
  text-decoration: none;
  &:hover {
    background: #aaa;
    text-decoration: underline;
  }
`;

export const StyledImg = styled.img`
  margin: 30vh auto 0;
  display: block;
`;

export const StyledNoNews = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  margin-top: 30vh;
`;

export const StyledError = styled.h1`
  text-align: center;
  font-size: 32px;
  line-height: 48px;
  margin-top: 30vh;
  color: #d60000;
`;
