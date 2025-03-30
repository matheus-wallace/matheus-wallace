"use client";

import styled from "styled-components";

export const FooterContainer = styled.p`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 20px;
  font-weight: ${({ theme }) => theme.weights.bold};
  margin-top: auto;
`;
