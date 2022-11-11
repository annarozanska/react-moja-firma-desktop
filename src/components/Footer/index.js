import React from 'react';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import {
	Foot,
	FooterContainer,
	FooterContent,
	FooterSocal,
	FooterIcons,
} from './FooterStyle';

const Footer = () => {
	return (
		<div>
			<Foot>
				<FooterContainer>
					<FooterContent>
						Nazwa firmy - wszelskie prawa zastrzeżone,{' '}
						{new Date().getFullYear()}
					</FooterContent>

					<FooterSocal>
						<FooterIcons to='//www.instagram.com/' target='_blank'>
							<FaInstagram />
						</FooterIcons>

						<FooterIcons to='//pl-pl.facebook.com/' target='_blank'>
							<FaFacebookSquare />
						</FooterIcons>
					</FooterSocal>
				</FooterContainer>
			</Foot>
		</div>
	);
};

export default Footer;
