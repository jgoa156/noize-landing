import React from "react";
import Title from "components/shared/Title";
import {
	SectionWrapper,
	Info,
	DescriptionWrapper,
	ImageWrapper,
} from "./components";

export default function Details() {
	function Description() {
		return (
			<DescriptionWrapper>
				<p>
					Descubra os melhores bares da cidade através das avaliações detalhadas e honestas de outros usuários em nosso incrível
					aplicativo. Com apenas alguns toques, você terá acesso a uma ampla variedade de opiniões e experiências compartilhadas
					por pessoas que já visitaram esses estabelecimentos. Navegue por avaliações que incluem aspectos como qualidade dos drinks,
					atmosfera, serviço, preços e muito mais.
				</p>

				<p>
					Essas avaliações ajudam a tomar decisões mais informadas, permitindo que você escolha os bares que melhor se encaixam
					nos seus gostos e preferências. Não perca tempo, junte-se à nossa comunidade e aproveite todas as vantagens de ler
					avaliações confiáveis para tornar suas saídas noturnas ainda mais memoráveis.
				</p>
			</DescriptionWrapper>
		);
	}

	function Image() {
		return (
			<ImageWrapper>
				<img src={`${process.env.img}/components/Features/detailsScreenshot.png`} />
			</ImageWrapper>
		);
	}

	return (
		<SectionWrapper>
			<div>
				<Title>Leia avaliações de outros usuários</Title>

				<Info>
					<Description />
					<Image />
				</Info>
			</div>
		</SectionWrapper>
	);
}