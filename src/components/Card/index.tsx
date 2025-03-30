import React from "react";
import { CardContainer } from "./styles";
import iconMap from "@/assets/IconMap";
import Icon from "../Icon";
import TitleWithIcon from "../TitleWithIcon";
import { translations } from "@/i18n/translations";

interface CardProps {
  description: string;
  title: keyof typeof translations | string;
  iconName: keyof typeof iconMap;
  iconTitle: keyof typeof iconMap;
}

const Card = ({ description, title, iconName, iconTitle }: CardProps) => {
  return (
    <CardContainer>
      <Icon name={iconName} />
      <TitleWithIcon text={title} iconName={iconTitle} size={1} leftIconMobile={true} />
      <p>{description}</p>
    </CardContainer>
  );
};

export default Card;
