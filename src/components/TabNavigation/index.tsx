import { useLanguage } from "@/context/translations";
import { useState } from "react";
import { TabButton, TabButtons, TabContent, TabsContainer } from "./styles";
import Expericence from "../Experience";
import TitleWithIcon from "../TitleWithIcon";

type TabType = "formation" | "contact" | "experience" | "projects";

const TabsNavigation = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("experience");

  return (
    <TabsContainer>
      <TabButtons>
        <TabButton $isActive={activeTab === "formation"} onClick={() => setActiveTab("formation")}>
          {t("formation")}
        </TabButton>

        <TabButton $isActive={activeTab === "experience"} onClick={() => setActiveTab("experience")}>
          {t("experience")}
        </TabButton>

        <TabButton $isActive={activeTab === "projects"} onClick={() => setActiveTab("projects")}>
          {t("projects")}
        </TabButton>

        <TabButton $isActive={activeTab === "contact"} onClick={() => setActiveTab("contact")}>
          {t("contact")}
        </TabButton>
      </TabButtons>

      <TabContent>
        {activeTab === "formation" && <TitleWithIcon iconName="Linkedin" text="teste1" />}
        {activeTab === "contact" && <TitleWithIcon iconName="Linkedin" text="teste2" />}
        {activeTab === "experience" && <Expericence />}
        {activeTab === "projects" && <TitleWithIcon iconName="Linkedin" text="teste3" />}
      </TabContent>
    </TabsContainer>
  );
};

export default TabsNavigation;
