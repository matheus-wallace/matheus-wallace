"use client";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.sizes.spacing.lg};
    border-radius: ${({ theme }) => theme.sizes.spacing.lg};
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing.xl};
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundColor};

  @media (max-width: 480px) {
    border-radius: ${({ theme }) => theme.sizes.spacing.md};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 480px) {
    display: none;
  }
`;

export const IconLink = styled.a`
  margin-right: ${({ theme }) => theme.sizes.spacing.lg};

  &:last-child {
    margin-right: 0;
  }
`;

export const HeaderLogo = styled.h1`
  display: inline;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.fonts.lg};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.fonts.md};
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const TextBlue = styled.span`
  color: ${({ theme }) => theme.colors.detailBlue};
`;
