import React from "react";
import { CardContent, ExpericenceContainer } from "./styles";
import { useLanguage } from "@/context/translations";
import TitleWithIcon from "../TitleWithIcon";
import Card from "../Card";

const Expericence = () => {
  const { t } = useLanguage();
  return (
    <ExpericenceContainer>
      <TitleWithIcon text={t("experience")} iconName="brainDesktop" />
      <CardContent>
        <Card
          description={t("tecHelpdeskDescription")}
          iconName="solisticaLogo"
          iconTitle="dice1"
          title={t("helpdesk")}
        />

        <Card
          description={t("analystHelpdeskDescription")}
          iconName="solisticaLogo"
          iconTitle="dice2"
          title={t("helpdeskAnalist")}
        />
        <Card
          description={t("frontendDescription")}
          iconName="solisticaLogo"
          iconTitle="dice3"
          title={t("devFrontend")}
        />
        <Card
          description={t("fullstackDescription")}
          iconName="solisticaLogo"
          iconTitle="dice4"
          title={t("FullStackDeveloper")}
        />
      </CardContent>
    </ExpericenceContainer>
  );
};

export default Expericence;
