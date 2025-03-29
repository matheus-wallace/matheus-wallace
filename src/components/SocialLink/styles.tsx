import styled from "styled-components";

export const MenuItemContainer = styled.article`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.spacing.sm};
  margin-left: ${({ theme }) => theme.sizes.spacing.sm};
  margin-bottom: ${({ theme }) => theme.sizes.spacing.md};
`;
