import React from "react";
import styled from "styled-components";

export const TitleStyled = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-size: ${({ theme }) => theme.sizes.fonts.lg};
`;

const Title = ({ text }: { text: string }) => {
  return <TitleStyled>{text}</TitleStyled>;
};

export default Title;
