"use client";

import { useEffect, useState } from "react";
import Center from "@/components/Center";
import {
  HomeContainer,
  InfoContainer,
  PictureContainer,
  SectionHomeContainer,
  SectionNavigatorContainer,
  TechArticle,
} from "./styles";
import { useLanguage } from "@/context/translations";
import Subtitle from "@/components/Subtitle";
import Image from "next/image";
import { FormattedText } from "@/components/StrongBlueText";
import Title from "@/components/Title";

import TechList from "@/components/TechList";
import TabsNavigation from "@/components/TabNavigation";

export default function Home() {
  const { t } = useLanguage();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  if (isMobile === null) {
    return (
      <HomeContainer>
        <Center>
          <SectionHomeContainer>
            <InfoContainer>
              <Subtitle title={t("aboutMeTitle")} />
              <Title>Matheus Wallace da Silva Pereira</Title>
              <FormattedText text={t("aboutMeDescription")} />
              <TechArticle>
                <Subtitle title={t("techs")} />
              </TechArticle>
            </InfoContainer>
          </SectionHomeContainer>
        </Center>
      </HomeContainer>
    );
  }

  return (
    <HomeContainer>
      <Center>
        <SectionHomeContainer>
          <InfoContainer>
            <Subtitle title={t("aboutMeTitle")} />
            {isMobile && (
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
            <Title>Matheus Wallace da Silva Pereira</Title>
            <FormattedText text={t("aboutMeDescription")} />

            <TechArticle>
              <Subtitle title={t("techs")} />
              <TechList />
            </TechArticle>
          </InfoContainer>
          {!isMobile && (
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
      <SectionNavigatorContainer>
        <TabsNavigation />
      </SectionNavigatorContainer>
    </HomeContainer>
  );
}
