import React from "react";
import { NextSeo } from "next-seo";

import Banner from "components/pages/home/Banner";
import Find from "components/pages/home/Find";
import Review from "components/pages/home/Review";
import Details from "components/pages/home/Details";
import ContactMe from "components/pages/home/ContactMe";

export default function Home() {
	return (
		<>
			<Banner />
			<Find />
			<Review />
			<Details />
			<ContactMe />
		</>
	);
}