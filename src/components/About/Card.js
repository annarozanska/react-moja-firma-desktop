import React from 'react';
import { AboutBox, Image, Content } from './AboutStyle';

const Card = (props) => {
	return (
		<div>
			<AboutBox>
				{props.id % 2 === 1 ? (
					<Image>
						<img src={props.image} alt='osoba' />
					</Image>
				) : null}

				<Content>
					<h3>
						{props.name} | {props.department}
					</h3>
					<p>{props.title}</p>
				</Content>

				{props.id % 2 === 0 ? (
					<Image>
						<img src={props.image} alt='osoba' />
					</Image>
				) : null}
			</AboutBox>
		</div>
	);
};

export default Card;
