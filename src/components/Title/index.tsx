import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray};
  font-weight: ${({ theme }) => theme.weights.medium};
  font-size: ${({ theme }) => theme.sizes.fonts.lg};
`;

export default Title;
