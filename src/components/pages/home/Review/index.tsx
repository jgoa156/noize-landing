import React from "react";
import { useMediaQuery } from "react-responsive";

import Title from "components/shared/Title";
import {
	SectionWrapper,
	Info,
	DescriptionWrapper,
	ImageWrapper,
	CustomTitle
} from "./components";

export default function Review() {
	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});

	function Description() {
		return (
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
				<CustomTitle reverse={!isMobile}>Avalie lugares como quiser</CustomTitle>

				<Info>
					{isMobile
						? <>
							<Description />
							<Image />
						</>
						: <>
							<Image />
							<Description />
						</>
					}
				</Info>
			</div>
		</SectionWrapper>
	);
}