import styled from "styled-components";

export interface MenuProps {
  $isOpen: boolean;
}

export const MenuContainer = styled.div<MenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.sizes.spacing.xmd};
`;

export const MenuSection = styled.section`
  margin-bottom: ${({ theme }) => theme.sizes.spacing.xxmd};
`;
