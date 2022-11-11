import styled from 'styled-components';

export const AboutWrapper = styled.div`
	width: 100%;
	height: max-content;
	padding: 50px 0;
	background: linear-gradient(var(--white) 30%, #d4d4d4 );
`;
export const AboutContainer = styled.h2`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-start;
	width: 960px;
	margin: 0 auto;
`;
export const AboutH2 = styled.h2`
	text-align: center;
	font-size: 36px;
	font-weight: 700;
	padding-bottom: 15px;
	color: var(--blue);
`;
export const AboutBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	height: max-content;
	margin: 0 auto;
`;
export const Image = styled.div`
	width: 197px;
	height: 197px;
	margin: 25px 0;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
`;

export const Content = styled.div`
	display: flex;
	flex: 2;
	flex-direction: column;
	text-align: left;
	font-size: 18px;
	color: var(--blue);
	margin-left: 25px;

	&:nth-child(odd) {
		margin-right: 25px;
		margin-left: 0px;
		text-align: right;
	}

	p {
		padding: 15px 0;
	}
`;
