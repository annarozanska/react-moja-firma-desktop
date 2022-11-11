import styled from 'styled-components';
import { Link as LinkFooter } from 'react-router-dom';

export const Foot = styled.div`
	width: 100%;
	background: var(--grey);
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 960px;
	height: 60px;
	margin: 0 auto;
`;
export const FooterContent = styled.p`
	text-align: center;
	font-size: 17px;
	color: var(--white);
`;
export const FooterSocal = styled.div``;

export const FooterIcons = styled(LinkFooter)`
	font-size: 30px;
	color: var(--white);
	cursor: pointer;

	&:first-child {
		margin-right: 20px;
	}

	&:hover {
		color: var(--lightwhite);
	}
`;
