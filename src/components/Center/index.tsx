"use client";

import React from "react";
import styled from "styled-components";

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Center = ({ children }: { children: React.ReactNode }) => {
  return <CenterContainer>{children}</CenterContainer>;
};

export default Center;
