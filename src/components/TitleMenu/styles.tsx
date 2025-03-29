import styled from "styled-components";

export const MenuSubtitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  font-weight: ${({ theme }) => theme.weights.bold};
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.detailBlue};
    margin-top: 0.375rem;
    margin-bottom: ${({ theme }) => theme.sizes.spacing.xxmd};
  }
`;
