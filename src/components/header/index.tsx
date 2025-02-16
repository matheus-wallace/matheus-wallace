"use client";

import React, { useEffect, useState } from "react";
import { HeaderContainer, HeaderContent, HeaderLogo, IconContainer, IconLink } from "./style";
import Icon from "../Icon";
import Link from "next/link";
import { TextBlue } from "../TextBlue/style";
import useWindowSize from "@/hooks/useWindowSize";
import Menu from "../menu";

const Header = () => {
  const { width } = useWindowSize();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mobile = width <= 480;
    setIsMobile(mobile);
    if (!mobile) {
      setOpenMenu(false);
    }
  }, [width]);

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
            <IconLink data-testid="menu" onClick={() => setOpenMenu((prev) => !prev)}>
              <Icon name={openMenu ? "closeMenu" : "menuHamburguer"} />
            </IconLink>
          ) : (
            <>
              <IconLink href="https://github.com/matheus-wallace" data-testid="githubIcon" target="_blank">
                <Icon name={"github"} />
              </IconLink>

              <IconLink href="https://www.linkedin.com/in/matheus-wallace" data-testid="linkedinIcon" target="_blank">
                <Icon name={"linkedin"} />
              </IconLink>
            </>
          )}
        </IconContainer>
      </HeaderContent>

      {openMenu && isMobile && <Menu />}
    </HeaderContainer>
  );
};

export default Header;
