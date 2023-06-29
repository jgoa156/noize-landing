import React from "react";

import Title from "components/shared/Title";
import {
	SectionWrapper,
	Info,
	DescriptionWrapper,
	ImageWrapper,
} from "./components";

export default function Find() {

	return (
		<SectionWrapper>
			<div>
				<Title>Encontre lugares com a sua cara</Title>

				<Info>
					<DescriptionWrapper>
						<p>
							Descubra os melhores bares da sua região de forma rápida e fácil com o Noize! Utilizando recursos avançados
							de geolocalização, nossa plataforma encontra os bares mais próximos de você, permitindo que você
							explore uma ampla variedade de opções.
						</p>

						<p>
							Além disso, você pode filtrar suas pesquisas por tipo de bar, faixa de preço, classificações dos usuários e
							muito mais, garantindo que você encontre exatamente o que procura para curtir uma ótima noite.
							Deixe-nos ajudá-lo a descobrir novos lugares incríveis e desfrutar da melhor experiência em bares.
						</p>
					</DescriptionWrapper>

					<ImageWrapper>
						<img src={`${process.env.img}/components/Features/recommendScreenshot.png`} />
					</ImageWrapper>
				</Info>
			</div>
		</SectionWrapper>
	);
}