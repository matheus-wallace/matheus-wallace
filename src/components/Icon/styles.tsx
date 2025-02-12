"use client";
import iconMap from "@/assets/IconMap";
import styled from "styled-components";

export interface IconProps {
  name?: keyof typeof iconMap;
}

export const IconContainer = styled.img<IconProps>`
  display: inline;
`;
