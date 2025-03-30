import React from "react";
import Techs from "../Techs";
import styled from "styled-components";

const TechContainer = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Duas colunas de largura igual */
  gap: ${({ theme }) => theme.sizes.spacing.lg};
`;

const TechList = () => {
  return (
    <TechContainer>
      <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        <li>
          <Techs name="typescript" />
        </li>

        <li>
          <Techs name="react" />
        </li>

        <li>
          <Techs name="nextJS" />
        </li>
        <li>
          <Techs name="nodeJS" />
        </li>
        <li>
          <Techs name="prisma" />
        </li>
      </ul>
      <ul style={{ padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
        <li>
          <Techs name="laravel" />
        </li>
        <li>
          <Techs name="docker" />
        </li>
        <li>
          <Techs name="figma" />
        </li>
        <li>
          <Techs name="jest" />
        </li>
        <li>
          <Techs name="mysql" />
        </li>
      </ul>
    </TechContainer>
  );
};

export default TechList;
