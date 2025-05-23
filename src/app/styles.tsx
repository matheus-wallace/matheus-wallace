import styled from "styled-components";

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SectionHomeContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5rem;

  h1 {
    margin-bottom: ${({ theme }) => theme.sizes.spacing.sm};
  }

  padding: ${({ theme }) => theme.sizes.spacing.xxlg};

  @media (min-width: 631px) and (max-width: 1023px) {
    padding-top: 50px;
  }
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0;
  }

  @media (${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 2rem;
    h1 {
      margin-bottom: ${({ theme }) => theme.sizes.spacing.sm};
    }
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.sizes.spacing.xmd};
  }
`;

export const InfoContainer = styled.section`
  > * + * {
    margin-top: ${({ theme }) => theme.sizes.spacing.lg};
  }
  h1:first-child {
    margin-bottom: ${({ theme }) => theme.sizes.spacing.xxlg};
  }

  span {
    color: ${({ theme }) => theme.colors.softGray};
  }
  max-width: 573px;

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    h1 {
      font-size: ${({ theme }) => theme.sizes.fonts.xmd};
      margin-bottom: ${({ theme }) => theme.sizes.spacing.sm};
    }

    span {
      font-size: ${({ theme }) => theme.sizes.fonts.sm};
    }
  }
`;
export const PictureContainer = styled.article`
  border-radius: 50%;
  img {
    width: clamp(300px, 25vw, 400px);
    height: clamp(300px, 25vw, 400px);
    border-radius: 50%;
    border: 3px solid ${({ theme }) => theme.colors.detailBlue};
    object-fit: cover;
  }

  @media (${({ theme }) => theme.breakpoints.tablet}) {
    justify-self: center;
  }
`;

export const SectionNavigatorContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  padding: ${({ theme }) => theme.sizes.spacing.xxlg};
  @media (${({ theme }) => theme.breakpoints.mobile}) {
    border-top-left-radius: ${({ theme }) => theme.sizes.spacing.xmd};
    border-top-right-radius: ${({ theme }) => theme.sizes.spacing.xmd};
    padding: ${({ theme }) => theme.sizes.spacing.lg};
  }
`;

export const TechArticle = styled.article``;
