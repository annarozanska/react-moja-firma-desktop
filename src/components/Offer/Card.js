import React from 'react';
import { OfferBox } from './OfferStyle';

const Card = (props) => {
	return (
		<div>
			<OfferBox>
				<p>{props.title}</p>
				{props.isNew ? (
					<React.Fragment>
						<p>(nowość)</p>
						<div></div>
					</React.Fragment>
				) : null}
			</OfferBox>
		</div>
	);
};

export default Card;
