import styled from "styled-components";
import Title from "../Title";

export const TitleContainer = styled.div`
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
  }
`;

export const TitleIcon = styled(Title)`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.weights.bold};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.sizes.fonts.xmd};
  }
`;
