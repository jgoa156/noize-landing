import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

export const SectionWrapper = styled.section`
	width: 100%;
	height: 750px;
	position: relative;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	z-index: 5;
	border-bottom: 1px solid var(--color-2);

	& > div:nth-child(2) {
		width: 100%;
		max-width: 1920px;
		position: absolute;
		top: 0;

		display: flex;
		justify-content: center;
		align-items: center;
	}

	@media (max-width: 1024px) {
		height: 650px;
	}
	@media (max-width: 575px) {
		height: 550px;
	}
`;

export const BackgroundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	position: relative;
	width: 100%;
	height: 100%;

	overflow-x: hidden;
	box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);

	& > div:nth-child(2) {
		width: 100%;
		max-width: 1920px;
		position: absolute;
		top: 0;
	}
`;
export const Background = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: 50% ${props => props.parallaxY};
	filter: brightness(50%);

	transition: 0.8s;

  @media (max-width: 575px) {
		object-position: 60% ${props => props.parallaxY};
	}
`;

export const Intro = styled.div`
	width: 100%;
	position: relative;
	top: calc(750px - (10rem + 200px));
	left: 100px;

	p {
		color: #AAA;
		font-size: 1.4rem;
		margin-bottom: 30px;
		text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
	}

	@media (max-width: 575px) {
		top: calc(680px - (10rem + 200px));
		left: 30px;

		p {
			font-size: 1rem;
		}
	}
`;

export const Logo = styled.img`
	width: 20%;
	height: auto;
	object-fit: cover;
	margin-bottom: 25px;
	padding-bottom: 25px;

	border-bottom: 1px solid var(--color-2);

	@media (max-width: 575px) {
		width: 60%;
		margin-bottom: 30px;
	}
`;

export const DownloadWrapper = styled.div`
	img {
		height: 50px;
		width: auto;
		object-fit: cover;
		margin-right: 20px;

		@media (max-width: 575px) {
			height: 35px;
		}
	}
`;