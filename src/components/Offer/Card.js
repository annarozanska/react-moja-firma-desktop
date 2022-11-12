import React from 'react';
import { OfferBox } from './OfferStyle';

const Card = (props) => {
	return (
		<div>
			<OfferBox>
				<p>{props.title}</p>
				{props.isNew ? <p>(nowość)</p> : null}
				{props.isNew ? <div></div> : null}
			</OfferBox>
		</div>
	);
};

export default Card;
