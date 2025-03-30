import styled from "styled-components";

export const ExpericenceContainer = styled.section`
  max-width: 1000px;
`;

export const CardContent = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.sizes.spacing.md};
  margin-top: ${({ theme }) => theme.sizes.spacing.xmd};
  grid-template-columns: repeat(2, 1fr);

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
  }
`;
