import styled from 'styled-components';
import { Link as LinkNav } from 'react-router-dom';

export const Nav = styled.nav`
	width: 100%;
	background: var(--grey);
`;

export const NavbarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 96%;
	height: 50px;
	margin: 0 auto;
`;

export const NavLogo = styled(LinkNav)`
	font-size: 18px;
	font-weight: bold;
	color: var(--white);

	&:hover {
		color: var(--lightwhite);
	}
`;

export const NavMenu = styled.div``;

export const NavItem = styled.ul`
	display: inline-block;
`;

export const NavLinks = styled(LinkNav)`
	font-size: 18px;
	margin-right: 12px;
	color: var(--lightwhite);
	cursor: pointer;

	&:nth-child(3) {
		cursor: not-allowed;
	}

	&:hover {
		color: var(--lightgray);
	}
`;
