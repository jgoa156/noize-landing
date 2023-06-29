import styled from 'styled-components';

export const TitleComponent = styled.h2`
	margin-bottom: 50px;
	
	color: white;
	${({ reverse }) => reverse && "text-align: right;"}
	font-size: 2.625rem;
	font-family: "Parkson";
	overflow: hidden;

	@media (max-width: 768px) {
		font-size: 2rem;
	}

	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ reverse }) => reverse && "align-items: flex-end;"}
	
	&:after {
		width: 50px;
		height: 2px;
		display: block;
		
		background-image: linear-gradient(to right, var(--primary-color), var(--primary-color-2));
		content: "";
	};
`;