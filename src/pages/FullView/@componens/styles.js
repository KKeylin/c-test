import styled from "styled-components";

// Image
export const StyledImg = styled.img`
  width: 100%;
  transition: 0.3s all;
  filter: blur(0) grayscale(0%);
`;

export const StyledImgWrapper = styled.div`
  width: 100%;
  position: relative;
  &:hover {
    img {
      filter: ${(props) =>
    props.remove
        ? "blur(0px) grayscale(0%)"
        : "blur(5px) grayscale(60%)"} !important;
    }
  }
`;

export const StyledDeleteBox = styled.div`
  text-align: center;
  transition: 0.3s all;
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  z-index: 2;
  width: calc(100% - 20px);
  height: calc(100% - 26px);
  top: 10px;
  left: 10px;
  display: ${(props) => (props.removeCounter > 6 ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  opacity: ${(props) =>
    props.removeCounter < 10 && props.removeCounter > 6 ? 1 : 0};
  &:hover {
    opacity: ${(props) => (props.removeCounter > 6 ? 1 : 0)};
  }
`;

export const StyledDeleteBtn = styled.button`
  text-align: center;
  transition: 0.3s all;
  width: 60%;
  color: #d60000;
  border: 2px solid #d60000;
  background: #fff;
  cursor: pointer;
`;

// Title
export const StyledTitle = styled.h1`
  transition: 0.3s all;
  cursor: pointer;
  position: relative;
  font-size: ${(props) => props.fontSize}rem;
  line-height: 1.4;
  margin: 0;
  padding: ${(props) => props.fontSize / 3.2}rem 0;
  z-index: 2;
  opacity: ${(props) => (props.edit ? 0 : 1)};
  &:hover {
    text-decoration: underline;
  }
`;

export const StyledInput = styled.input`
  font-size: ${(props) =>
    props.edit ? props.fontSize * 0.7 : props.fontSize}rem;
  line-height: 1.4;
  width: 100%;
  margin: 0;
  transition: 0.3s all;
  position: absolute;
  left: 0;
  top: ${(props) => props.fontSize / 3.2}rem;
  border: ${(props) => (props.edit ? 2 : 0)}px solid #000;
  z-index: ${(props) => (props.edit ? 3 : 1)};
  opacity: ${(props) => (props.edit ? 1 : 0)};
`;

export const StyledTitleWrapper = styled.div`
  position: relative;
  &:hover {
    button {
      opacity: 1 !important;
    }
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  transition: 0.3s all;
  font-size: ${(props) => props.fontSize}rem;
  padding: ${(props) => props.fontSize / 8}rem
    ${(props) => props.fontSize / 4}rem;
  z-index: 3;
  top: 2px;
  right: 2px;
  opacity: 0.01;
  background: #fff;
  color: #d60000;
  border: 1px solid #d60000;
  font-weight: bold;
  border-radius: 2px;
  cursor: pointer;
`;
