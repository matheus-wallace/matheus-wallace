"use client";

import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing.xl};
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  margin-right: ${({ theme }) => theme.sizes.spacing.lg};

  &:last-child {
    margin-right: 0;
  }
`;

export const HeaderLogo = styled.h1`
  display: inline;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.fonts.lg};
`;

export const TextBlue = styled.span`
  color: ${({ theme }) => theme.colors.detailBlue};
`;
