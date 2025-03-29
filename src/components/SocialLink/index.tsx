import React from "react";
import { IconLink } from "../Header/style";
import Icon from "../Icon";
import { MenuItemContainer } from "./styles";
import iconMap from "@/assets/IconMap";

interface SocialLinkProps {
  href: string;
  iconName: keyof typeof iconMap;
  label: string;
  testId: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, iconName, label, testId }) => {
  return (
    <IconLink href={href} data-testid={testId} target="_blank">
      <MenuItemContainer>
        <Icon name={iconName} />
        <p>{label}</p>
      </MenuItemContainer>
    </IconLink>
  );
};

export default SocialLink;
