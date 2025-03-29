import React from "react";
import Icon from "../Icon";
import iconMap from "@/assets/IconMap";
import { CardTech, TechContainer } from "./styles";
import useWindowSize from "@/hooks/useWindowSize";
import { useTheme } from "styled-components";

const Techs = ({ name }: { name: keyof typeof iconMap }) => {
  const { width } = useWindowSize();
  const { breakpoints } = useTheme();

  return (
    <>
      {width < breakpoints.desktopNumber ? (
        <CardTech>
          <Icon name={name} />
          <p>{name}</p>
        </CardTech>
      ) : (
        <TechContainer>
          <Icon name={name} />
          <p>{name}</p>
        </TechContainer>
      )}
    </>
  );
};

export default Techs;
