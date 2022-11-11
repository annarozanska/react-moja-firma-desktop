import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeroContainer = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	width: 100%;
	height: calc(100vh - 50px);
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.15);
	z-index: 1;
`;

export const HeroVideo = styled.video`
	height: calc(100vh - 50px);
	width: 100%;
	object-fit: cover;
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	width: 960px;
	height: auto;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	line-height: 52px;
	color: var(--white);
	z-index: 2;
`;
export const HeroH1 = styled.h1`
	font-size: 36px;
	font-weight: 700;
`;
export const HeroP = styled.p`
	font-size: 18px;
	font-weight: 700;
	padding: 32px 0;
`;
export const HeroBtn = styled(Link)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 160px;
	height: 40px;
	border: 3px solid var(--white);
	background: transparent;
	cursor: pointer;
	transition: background 1s ease-in-out;

	& > p {
		color: var(--white);
		transition: all 1s ease-in-out;
	}

	&:hover {
		background: var(--white);
	}

	&:hover p {
		font-weight: bold;
		color: var(--grey);
	}
`;
