import React from 'react';
import { AboutWrapper, AboutContainer, AboutH2 } from './AboutStyle';
import Card from './Card';
import data from './AboutApi';

const About = () => {
	return (
		<div>
			<AboutWrapper id='about'>
				<AboutContainer>
					<AboutH2>Nasi specjaliści</AboutH2>
					{data.map((val, index) => {
						return (
							<Card
								key={index}
								id={val.id}
								image={val.image}
								name={val.name}
								department={val.department}
								title={val.title}
							/>
						);
					})}
				</AboutContainer>
			</AboutWrapper>
		</div>
	);
};

export default About;
