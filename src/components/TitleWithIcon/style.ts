import styled from "styled-components";
import Title from "../Title";

export const TitleContainer = styled.div<{ $leftIconMobile?: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.spacing.sm};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    font-size: ${({ theme }) => theme.sizes.fonts.sm};
    h1 {
      order: 1;
    }
    img {
      order: 0;
    }
    flex-direction: ${({ $leftIconMobile }) => $leftIconMobile && "row"};
    align-items: center;
    gap: 0.5rem;
  }
`;

export const TitleIcon = styled(Title)<{ $size?: number }>`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights.bold};
  font-size: ${({ $size }) => $size && `${$size}rem`};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: 1rem;
    }
  }
`;
