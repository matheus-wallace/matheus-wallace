import styled from "styled-components";

export const SubtitleContainer = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.md};
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.weights.normal};
  color: ${({ theme }) => theme.colors.lightGray};
  white-space: nowrap;
  gap: 0.5rem;
  &::after {
    display: flex;
    content: "";
    height: 2px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.detailBlue};
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    font-weight: ${({ theme }) => theme.weights.bold};
    &::after,
    &::before {
      display: flex;
      content: "";
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.detailBlue};
    }
  }
`;
