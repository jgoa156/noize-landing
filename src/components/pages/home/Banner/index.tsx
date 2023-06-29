import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Dropdown } from "react-bootstrap";

import {
	SectionWrapper,

	BackgroundWrapper,
	Background,

	Intro,
	Logo,
	DownloadWrapper
} from "./components";

export default function Banner() {
	const [parallaxY, setParallaxY] = useState("20%");
	const isTablet = useMediaQuery({
		query: "(max-width: 1024px)"
	});

	const bannerHeight = isTablet ? 400 : 500;
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY <= bannerHeight) {
				let y = (window.scrollY / bannerHeight) * 100;
				setParallaxY(`calc(20% - ${y / 5}%)`);
			}
		});
	}, []);

	// Links
	const links = [
		{ icon: "fas fa-envelope", href: "mailto:jgoa156@gmail.com" },
		{ icon: "fab fa-github", href: "https://github.com/jgoa156" },
		{ icon: "fab fa-whatsapp", href: "https://wa.me/5592984656666" },
		{ icon: "fab fa-linkedin", href: "https://linkedin.com/in/jgoa156" }
	];

	return (
		<SectionWrapper id="banner">
			<BackgroundWrapper>
				<Background parallaxY={parallaxY} src={`${process.env.img}/components/Banner/bg.jpg`} />
			</BackgroundWrapper>

			<div>
				<Intro>
					<Logo src={`${process.env.img}/logo.png`} />
					<p>Encontre e avalie bares perto de<br />você do jeito que quiser.</p>

					<DownloadWrapper>
						<img src={`${process.env.img}/components/Banner/playstore.png`} />
						<img src={`${process.env.img}/components/Banner/appstore.png`} />
					</DownloadWrapper>
				</Intro>
			</div>
		</SectionWrapper>
	);
}