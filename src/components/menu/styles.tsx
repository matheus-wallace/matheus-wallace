import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.sizes.spacing.xmd};
`;

export const MenuContent = styled.div``;
