"use client";

import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  IconContainer,
  IconLink,
} from "./style";
import Icon from "../Icon";
import Link from "next/link";
import { TextBlue } from "../TextBlue/style";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent data-testid="header">
        <HeaderLogo>
          <Link href={"/"} aria-label="Página inicial">
            <TextBlue data-testid="textBlue">MW</TextBlue>SP
          </Link>
        </HeaderLogo>

        <IconContainer>
          <IconLink
            href="https://github.com/matheus-wallace"
            data-testid="githubIcon"
            target="_blank"
          >
            <Icon name={"github"} />
          </IconLink>

          <IconLink
            href="https://www.linkedin.com/in/matheus-wallace"
            data-testid="linkedinIcon"
            target="_blank"
          >
            <Icon name={"linkedin"} />
          </IconLink>
        </IconContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
