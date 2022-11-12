import React from 'react';
import { Offers, OfferContainer, OfferH2, OfferWrapper } from './OfferStyle';
import Card from './Card';
import data from './OfferApi';

const Offer = () => {
	return (
		<div>
			<Offers id='offer'>
				<OfferContainer>
					<OfferH2>Czym zajmuje się nasza firma?</OfferH2>
					<OfferWrapper>
						{data.map((val, index) => {
							return <Card key={index} id={val.id} title={val.title} isNew={val.isNew}/>;
						})}
					</OfferWrapper>
				</OfferContainer>
			</Offers>
		</div>
	);
};

export default Offer;
