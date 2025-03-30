import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TabButtons = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.sizes.spacing.sm};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    overflow-x: scroll;
  }
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
  background: none;
  border: none;
  font-weight: ${({ theme }) => theme.weights.bold};
  padding: 0.5rem 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.lightPurple : theme.colors.darkPurple)};
  border-bottom: 2px solid ${({ $isActive, theme }) => ($isActive ? theme.colors.lightPurple : "transparent")};
  transition: all 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
