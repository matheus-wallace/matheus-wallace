import React from "react";
import { MenuContainer, MenuProps, MenuSection } from "./styles";
import SubtitleMenuMobile from "../TitleMenu";
import SocialLink from "../SocialLink";
import LinkList from "../Linklist";

const Menu: React.FC<MenuProps> = ({ $isOpen }) => {
  return (
    <MenuContainer data-testid="MenuContent" $isOpen={$isOpen}>
      <MenuSection>
        <SubtitleMenuMobile title="Social" />
        <SocialLink
          href="https://www.linkedin.com/in/matheus-wallace"
          iconName="LinkedinMobile"
          label="Linkedin"
          testId="linkedinIcon"
        />
        <SocialLink
          href="https://github.com/matheus-wallace"
          iconName="GithubMobile"
          label="Github"
          testId="githubIcon"
        />
      </MenuSection>

      <MenuSection>
        <SubtitleMenuMobile title="Links" />
        <LinkList items={["Formação", "Experiência", "Projetos", "Contato"]} />
      </MenuSection>
    </MenuContainer>
  );
};

export default Menu;
