import React from "react";
import { ExpericenceContainer } from "./styles";
import { useLanguage } from "@/context/translations";
import TitleWithIcon from "../TitleWithIcon";

const Expericence = () => {
  const { t } = useLanguage();
  return (
    <ExpericenceContainer>
      <TitleWithIcon text={t("experience")} nameIcon="brainDesktop" />
    </ExpericenceContainer>
  );
};

export default Expericence;
