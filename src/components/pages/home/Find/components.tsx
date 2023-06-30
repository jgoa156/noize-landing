import styled from 'styled-components';

export const SectionWrapper = styled.section`
	width: 100%;
	height: fit-content;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	& > div {
		width: 100%;
		max-width: 1920px;
		
		padding: 150px 100px 350px;

		@media (max-width: 1024px) {
			padding: 50px 50px 0;
		}
		@media (max-width: 575px) {
			padding: 60px 30px 30px;
		}
	}
`;

export const Info = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 575px) {
		display: block;
	}
`;

export const DescriptionWrapper = styled.div`
	width: 40%;

	p {
		color: var(--muted);
		margin-bottom: 50px;
	}

	@media (max-width: 575px) {
		width: 100%;
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 60%;

	img {
		position: absolute;
		top: -180px;
		width: 60%;
		height: auto;

		@media (max-width: 1024px) {
			top: 0px;
			width: 75%;
		}
		@media (max-width: 1024px) {
			position: relative;
		}
	}

	@media (max-width: 575px) {
		width: 100%;
	}
`;