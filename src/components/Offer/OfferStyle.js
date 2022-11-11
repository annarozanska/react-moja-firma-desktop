import styled from 'styled-components';

export const Offers = styled.div`
	width: 100%;
	height: max-content;
	padding: 50px 0;
	background: #405d78;
`;
export const OfferContainer = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	width: 960px;
	padding-top: 20px;
	margin: 0 auto;
`;
export const OfferH2 = styled.h2`
	text-align: center;
	padding-bottom: 40px;
	font-size: 34px;
	font-weight: 700;
	color: var(--white);
`;
export const OfferWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 35px;
	height: max-content;
	margin: 0 auto;
`;

export const OfferBox = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	width: 228px;
	height: 223.78px;
	margin: 10px 2px;
	background: var(--lightwhite);
	position: relative;
	transition: all 0.5s ease;

	p {
		font-size: 24px;
	}

	p:nth-child(2) {
		font-size: 18px;
	}

	div {
		position: absolute;
		top: -9.5px;
		left: -9.5px;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background: red;
	}

	&:hover {
		transform: scale(1.05);
	}
`;
