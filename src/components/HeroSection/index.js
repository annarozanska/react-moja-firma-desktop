import React from 'react';
import { Link } from 'react-scroll';
import {
	HeroContainer,
	HeroBg,
	HeroVideo,
	HeroContent,
	HeroH1,
	HeroP,
	HeroBtn,
} from './HeroSectionStyle';
import Video from '../../images/forest.mp4';

const HeroSection = () => {
	return (
		<div>
			<HeroContainer>
				<HeroBg></HeroBg>
				<HeroVideo autoPlay loop muted src={Video} type='video/mp4' />
				<HeroContent>
					<HeroH1>
						Nasz frma oferuje najwyższej <br />
						jakośc usługi
					</HeroH1>
					<HeroP>Nie wierz nam na słowo - sprawdź</HeroP>
					<Link to='offer' spy={true} smooth={true} offset={40} duration={500}>
						<HeroBtn>
							<p>oferta</p>
						</HeroBtn>
					</Link>
				</HeroContent>
			</HeroContainer>
		</div>
	);
};

export default HeroSection;
