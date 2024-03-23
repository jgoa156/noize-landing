import styled from 'styled-components';
import Title from 'components/shared/Title';

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

	@media (max-width: 575px) {
		flex-direction: column;
	}
`;

export const TitleWrapper = styled.div`
	width: 80%;

	@media (max-width: 1024px) {
		width: 100%;
	}
`;

export const DescriptionWrapper = styled.div`
	width: 40%;

	& > p {
		color: var(--muted); 
		text-align: right;
		margin-bottom: 50px;
	}

	@media (max-width: 575px) {
		width: 100%;

		p {
			text-align: left;
		}
	}
`;

export const ImageWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	width: 40%;

	@media (max-width: 1024px) {
		width: 60%;
	}
	@media (max-width: 1024px) {
		width: 100%;
	}

	img {
		position: absolute;
		top: -180px;
		width: 60%;
		height: auto;

		@media (max-width: 1024px) {
			top: -50px;
			width: 50%;
		}
		@media (max-width: 575px) {
			position: relative;
			width: 60%;
			top: 0;
		}
	}
`;