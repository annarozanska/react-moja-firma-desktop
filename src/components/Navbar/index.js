import React from 'react';
import { Link } from 'react-scroll';
import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavMenu,
	NavItem,
	NavLinks,
} from './NavbarStyle';

const Navbar = () => {
	return (
		<div>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Moja Firma</NavLogo>
					<NavMenu>
						<NavItem>
							<NavLinks>
								<Link
									to='about'
									spy={true}
									smooth={true}
									offset={9}
									duration={500}
								>
									o nas
								</Link>
							</NavLinks>
							<NavLinks>
								<Link
									to='offer'
									spy={true}
									smooth={true}
									offset={40}
									duration={500}
								>
									oferta
								</Link>
							</NavLinks>
							<NavLinks>kontakt</NavLinks>
						</NavItem>
					</NavMenu>
				</NavbarContainer>
			</Nav>
		</div>
	);
};

export default Navbar;
