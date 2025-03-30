import React from "react";
import { TitleContainer, TitleIcon } from "./style";
import Icon from "../Icon";
import iconMap from "@/assets/IconMap";

interface TitleProps {
  text: string;
  iconName: keyof typeof iconMap;
  size?: number;
  leftIconMobile?: boolean;
}

const TitleWithIcon = ({ text, iconName, size, leftIconMobile }: TitleProps) => {
  return (
    <TitleContainer $leftIconMobile={leftIconMobile}>
      <TitleIcon $size={size}>{text}</TitleIcon>
      <Icon name={iconName} />
    </TitleContainer>
  );
};

export default TitleWithIcon;
