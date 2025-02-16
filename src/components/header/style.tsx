import styled from "styled-components";

interface HeaderProps {
  $isOpen: boolean;
}

export const HeaderContainer = styled.header<HeaderProps>`
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.sizes.spacing.xmd};
    background-color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.backgroundColor : theme.colors.white)};
    height: ${({ $isOpen }) => ($isOpen ? "100vh" : "auto")};
  }
`;

export const HeaderContent = styled.div<HeaderProps>`
  display: flex;
  width: 100%;
  padding: ${({ theme }) => theme.sizes.spacing.lg} ${({ theme }) => theme.sizes.spacing.xxxlg};
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.white : theme.colors.backgroundColor)};

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.sizes.spacing.lg} ${({ theme }) => theme.sizes.spacing.xxlg};
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    border-radius: ${({ theme }) => theme.sizes.spacing.md};
    padding: ${({ theme }) => theme.sizes.spacing.lg} ${({ theme }) => theme.sizes.spacing.lg};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const IconLink = styled.a`
  margin-right: ${({ theme }) => theme.sizes.spacing.xmd};
  &:last-child {
    margin-right: 0;
  }
`;

export const HeaderLogo = styled.h1<HeaderProps>`
  display: inline;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.sizes.fonts.lg};

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.sizes.fonts.md};
    color: ${({ theme, $isOpen }) => ($isOpen ? theme.colors.gray : theme.colors.white)};
  }
`;
