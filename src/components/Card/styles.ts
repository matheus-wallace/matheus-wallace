import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundColorSoft};
  border: 2px solid ${({ theme }) => theme.colors.detailBlue};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.sizes.spacing.ssm};
  img:first-child {
    width: 100px;
    height: 100px;
    margin-bottom: ${({ theme }) => theme.sizes.spacing.ssm};
  }

  P {
    margin-top: ${({ theme }) => theme.sizes.spacing.ssm};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.sizes.fonts.sm};

    line-height: 1.5rem;
  }

  h1 {
    font-size: ${({ theme }) => theme.sizes.fonts.md};
  }

  @media (${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    /* text-align: center; */
    h1 {
      font-size: ${({ theme }) => theme.sizes.fonts.sm};
    }
    P {
      font-size: ${({ theme }) => theme.sizes.fonts.ssm};
    }
  }
`;
