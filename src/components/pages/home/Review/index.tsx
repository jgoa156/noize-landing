import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
import {
  SectionWrapper,
  Info,
  DescriptionWrapper,
  ImageWrapper,
  TitleWrapper
} from "./components";

export default function Review() {
  const isMobile = useMediaQuery({
    query: "(max-width: 575px)"
  });
  const [_isMobile, _setIsMobile] = useState(false);

  useEffect(() => {
    _setIsMobile(isMobile);
  }, [isMobile]);

  const paragraphs = [
    `Com o Noize, você pode compartilhar suas experiências e opiniões, ajudando outros usuários a tomar decisões informadas.
    Nossa funcionalidade de avaliação permite que você atribua uma classificação de estrelas,
    bem como adicionar tags relevantes, como "ambiente aconchegante", "excelente atendimento" ou "drinks criativos".`,
    `As tags permitem uma avaliação mais detalhada e livre, facilitando a busca por bares que atendam
    às suas preferências e necessidades. Compartilhe sua expertise e ajude a criar uma comunidade
    de amantes de bares ainda mais envolvente e interativa!
    `
  ]

  function Description() {
    return (
      <DescriptionWrapper>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </DescriptionWrapper>
    );
  }

  function Image() {
    return (
      <ImageWrapper>
        <img src={`${process.env.img}/components/Features/reviewScreenshot.png`} />
      </ImageWrapper>
    );
  }

  return (
    <SectionWrapper>
      <div>
        <TitleWrapper>
          <Title reverse={!_isMobile}>Avalie lugares como quiser</Title>
        </TitleWrapper>

        {_isMobile
          ? <Info>
            <Description />
            <Image />
          </Info>
          : <Info>
            <Image />
            <Description />
          </Info>
        }
      </div>
    </SectionWrapper>
  );
}