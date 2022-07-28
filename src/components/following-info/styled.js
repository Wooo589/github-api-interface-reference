import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin: 16px 16px;
  width: 350px;
  height: 170px;
  align-content: center;
`;

export const WrapperLink = styled.a`
  color: #3182ce;
  font-size: 18px;
  font-weight: bold;
  margin: 8px 0;
  &:hover {
    opacity: 0.6;
    transition: 0.8s;
  }
`;

export const WrapperImage = styled.img`
  border: 1px solid #000;
  border-radius: 50%;
  width: 70px;
  margin: 8px;
`;

export const WrapperName = styled.h2`
    font-size: 16px;
    font-weight: bold;
    margin: 8px 0;
    color: #2d3748;
`;