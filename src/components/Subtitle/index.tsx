import React from "react";
import { SubtitleContainer } from "./styles";

const Subtitle = ({ title }: { title: string }) => {
  return <SubtitleContainer>{title}</SubtitleContainer>;
};

export default Subtitle;
