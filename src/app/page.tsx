"use client";

import Center from "@/components/Center";
import { HomeContainer, InfoContainer, PictureContainer, SectionHomeContainer, TechArticle } from "./styles";
import { useLanguage } from "@/context/translations";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import { FormattedText } from "@/components/StrongBlueText";
import Title from "@/components/Title";
import useWindowSize from "@/hooks/useWindowSize";

export default function Home() {
  const { t } = useLanguage();
  const { width } = useWindowSize();
  return (
    <HomeContainer>
      <Center>
        <SectionHomeContainer>
          <InfoContainer>
            <Subtitle title={t("aboutMeTitle")} />
            {width < 1024 && (
              <PictureContainer>
                <Image
                  src="/img/photo.jpg"
                  width={350}
                  height={350}
                  alt="Matheus Wallace - Front-end Developer"
                  priority
                />
              </PictureContainer>
            )}
            <Title text="Matheus Wallace da Silva Pereira" />
            <FormattedText text={t("aboutMeDescription")} />

            <TechArticle>
              <Subtitle title={t("techs")} />
            </TechArticle>
          </InfoContainer>
          {width > 1024 && (
            <PictureContainer>
              <Image
                src="/img/photo.jpg"
                width={350}
                height={350}
                alt="Matheus Wallace - Front-end Developer"
                priority
              />
            </PictureContainer>
          )}
        </SectionHomeContainer>
      </Center>
    </HomeContainer>
  );
}
