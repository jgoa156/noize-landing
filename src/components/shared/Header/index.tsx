import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import Scrollspy from "react-scrollspy";

import {
	HeaderWrapper,
	TitleWrapper,
	LinkWrapper,
	GoToTop,

	Burger,
	Sidenav,
	SidenavBackground
} from "./components";

export default function Header() {
	const isMobile = useMediaQuery({
		query: "(max-width: 575px)"
	});
	const isTablet = useMediaQuery({
		query: "(max-width: 1024px)"
	});
	const [loaded, setLoaded] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [showGoToTop, setShowGoToTop] = useState(false);
	const [showSidenav, setShowSidenav] = useState(false);

	// Go to top
	const bannerHeight = isTablet ? 650 : 750;
	useEffect(() => {
		setLoaded(true);
		window.addEventListener("scroll", () => {
			setScrolled(window.scrollY >= bannerHeight - 50);
			setShowGoToTop(window.scrollY >= bannerHeight + 50);
		});
	}, []);

	return (
		<HeaderWrapper scrolled={scrolled}>
			<nav>
				<TitleWrapper scrolled={scrolled}>
					<img src={`${process.env.img}/logo.png`} />
				</TitleWrapper>

				<GoToTop href={"#banner"} showGoToTop={showGoToTop} className={"fas fa-arrow-up"} />
			</nav>
		</HeaderWrapper>
	);
}