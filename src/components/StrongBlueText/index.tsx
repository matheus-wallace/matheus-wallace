// components/FormattedText.tsx
import React from "react";
import styled from "styled-components";

const BlueText = styled.span`
  font-weight: ${({ theme }) => theme.weights.bold};
  color: ${({ theme }) => theme.colors.detailBlue} !important;
`;

const BoldText = styled.span`
  font-weight: ${({ theme }) => theme.weights.bold};
`;

export const FormattedText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*|@@.*?@@)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <BoldText key={index}>{part.slice(2, -2)}</BoldText>;
        }
        if (part.startsWith("@@") && part.endsWith("@@")) {
          return <BlueText key={index}>{part.slice(2, -2)}</BlueText>;
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};
