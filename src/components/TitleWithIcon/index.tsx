import React from "react";
import { TitleContainer, TitleIcon } from "./style";
import Icon from "../Icon";
import iconMap from "@/assets/IconMap";

const TitleWithIcon = ({ text, nameIcon }: { text: string; nameIcon: keyof typeof iconMap }) => {
  return (
    <TitleContainer>
      <TitleIcon>{text}</TitleIcon>
      <Icon name={nameIcon} />
    </TitleContainer>
  );
};

export default TitleWithIcon;
