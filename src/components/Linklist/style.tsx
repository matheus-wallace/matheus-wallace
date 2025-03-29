import styled from "styled-components";

export const SectionMenuList = styled.ul`
  list-style: none;
  font-size: ${({ theme }) => theme.sizes.fonts.sm};
  margin-left: ${({ theme }) => theme.sizes.spacing.sm};
`;

export const ListMenuItem = styled.li`
  margin-bottom: ${({ theme }) => theme.sizes.spacing.lg};
  display: flex;
  align-items: center;

  &::before {
    content: "";
    display: inline-block;
    width: 0.3125rem;
    height: 0.3125rem;
    border-radius: 50%;
    background: linear-gradient(100deg, rgba(85, 171, 200, 1) 28%, rgba(94, 12, 228, 1) 100%);
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;
