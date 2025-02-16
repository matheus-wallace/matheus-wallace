import React from "react";
import { IconContainer } from "./styles";
import iconMap from "@/assets/IconMap";

export interface IconProps {
  name: keyof typeof iconMap;
}

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconSrc = iconMap[name].src;

  return <IconContainer src={IconSrc} {...props} />;
};

export default Icon;
