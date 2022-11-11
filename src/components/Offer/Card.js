import React from 'react';
import { OfferBox } from './OfferStyle';

const Card = (props) => {
	return (
		<div>
			<OfferBox>
				<p>{props.title}</p>
				{props.id === 1 ? <p>(nowość)</p> : null}
				{props.id === 1 ? <div></div> : null}
			</OfferBox>
		</div>
	);
};

export default Card;
