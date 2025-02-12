import React from "react";
import { IconContainer, IconProps } from "./styles";
import iconMap from "@/assets/IconMap";

const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  if (name === undefined) {
    console.warn("icon name prop cannot be undefind");
    return;
  }

  const IconSrc = iconMap[name].src;
  console.log(IconSrc);

  return <IconContainer src={IconSrc} {...props} />;
};

export default Icon;
