import React from "react";

import Title from "components/shared/Title";
import {
	SectionWrapper,
	Info,
	DescriptionWrapper,
	ImageWrapper,
} from "./components";

export default function Review() {

	return (
		<SectionWrapper>
			<div>
				<Title reverse={true} style={{ width: "80%" }}>Avalie lugares como quiser</Title>

				<Info>
					<ImageWrapper>
						<img src={`${process.env.img}/components/Features/reviewScreenshot.png`} />
					</ImageWrapper>

					<DescriptionWrapper>
						<p>

							Com o Noize, você pode compartilhar suas experiências e opiniões, ajudando outros usuários a tomar decisões informadas.
							Nossa funcionalidade de avaliação permite que você atribua uma classificação de estrelas,
							bem como adicionar tags relevantes, como "ambiente aconchegante", "excelente atendimento" ou "drinks criativos".
						</p>

						<p>
							As tags permitem uma avaliação mais detalhada e livre, facilitando a busca por bares que atendam
							às suas preferências e necessidades. Compartilhe sua expertise e ajude a criar uma comunidade
							de amantes de bares ainda mais envolvente e interativa!
						</p>
					</DescriptionWrapper>
				</Info>
			</div>
		</SectionWrapper>
	);
}