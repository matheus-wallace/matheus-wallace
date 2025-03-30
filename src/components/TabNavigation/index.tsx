import { useLanguage } from "@/context/translations";
import { useState } from "react";
import styled from "styled-components";
import { TabButton, TabButtons, TabsContainer } from "./styles";

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
        {activeTab === "contact" && <ContatoContent />}
        {activeTab === "experience" && <ExperienciaContent />}
        {activeTab === "projects" && <ProjetosContent />}
      </TabContent>
    </TabsContainer>
  );
};

// 3. Componentes de Conteúdo (exemplos)
const ContatoContent = () => <div>Formulário de contato...</div>;
const ExperienciaContent = () => <div>Histórico profissional...</div>;
const ProjetosContent = () => <div>Portfólio de trabalhos...</div>;

// 4. Estilos com styled-components

const TabContent = styled.div`
  padding: 0 0.5rem;
  min-height: 300px;
`;

export default TabsNavigation;
