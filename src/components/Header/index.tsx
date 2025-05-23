"use client";

import React, { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderLogo,
  IconContainer,
  IconLink,
  LangagueSwicher,
  LinksContainer,
} from "./style";
import Icon from "../Icon";
import Link from "next/link";
import { TextBlue } from "../TextBlue/style";
import useWindowSize from "@/hooks/useWindowSize";
import Menu from "../Menu";
import { useLanguage } from "@/context/translations";

const Header = () => {
  const { width } = useWindowSize();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const mobile = width <= 630;
    setIsMobile(mobile);
    if (!mobile) {
      setOpenMenu(false);
    }
  }, [width]);

  const changeLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt");
  };

  return (
    <HeaderContainer $isOpen={openMenu}>
      <HeaderContent data-testid="header" $isOpen={openMenu}>
        <HeaderLogo $isOpen={openMenu}>
          <Link href={"/"} aria-label="Página inicial">
            <TextBlue data-testid="textBlue">MW</TextBlue>SP
          </Link>
        </HeaderLogo>

        <IconContainer>
          {isMobile ? (
            <LinksContainer>
              <IconLink data-testid="menu" onClick={() => setOpenMenu((prev) => !prev)}>
                <Icon name={openMenu ? "CloseMenu" : "MenuHamburguer"} />
              </IconLink>
              <LangagueSwicher onClick={changeLanguage}>{language === "pt" ? "🇧🇷" : "🇺🇸"}</LangagueSwicher>
            </LinksContainer>
          ) : (
            <>
              <IconLink href="https://github.com/matheus-wallace" data-testid="githubIcon" target="_blank">
                <Icon name={"Github"} />
              </IconLink>
              <IconLink href="https://www.linkedin.com/in/matheus-wallace" data-testid="linkedinIcon" target="_blank">
                <Icon name={"Linkedin"} />
              </IconLink>
              <LangagueSwicher onClick={changeLanguage}>{language === "pt" ? "🇧🇷" : "🇺🇸"}</LangagueSwicher>
            </>
          )}
        </IconContainer>
      </HeaderContent>
      {openMenu && isMobile && <Menu $isOpen={openMenu} />}
    </HeaderContainer>
  );
};

export default Header;
