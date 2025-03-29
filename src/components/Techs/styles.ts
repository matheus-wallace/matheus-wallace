import styled from "styled-components";

export const TechContainer = styled.article`
  display: flex;
  gap: ${({ theme }) => theme.sizes.spacing.sm};
  align-items: center;
  margin-top: ${({ theme }) => theme.sizes.spacing.sm};
  text-transform: capitalize;
`;

export const CardTech = styled.div`
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.detailBlue};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  margin-top: ${({ theme }) => theme.sizes.spacing.md};
  border-radius: ${({ theme }) => theme.sizes.spacing.md};
  background-color: ${({ theme }) => theme.colors.darkGray};
  padding: ${({ theme }) => theme.sizes.spacing.md};
  p {
    font-weight: ${({ theme }) => theme.weights.bold};
  }
`;
