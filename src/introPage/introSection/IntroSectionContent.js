import React from 'react';
import styled from '@emotion/styled';

// SVG
import { ReactComponent as PhononLogo } from './../../image/logo/phonon_art_logo.svg';

//SECTION> CSS COMPONENT
const Container = styled.div``;
const Logo = styled(PhononLogo)`
	width: 170px;
	padding-left: 20px;
	transform: skewX(-17deg) rotate(-17deg) scale(1, 1.3);
`;
const TextContent = styled.div`
	transform: translate(-90px, 0px) skewX(-17deg) rotate(-17deg)
		scale(0.9, 1.1);
	padding-left: 40px;
	& > h2 {
		letter-spacing: 4px;
		line-height: 50px;
		font-size: 24px;
		font-weight: 600;
		& > span {
			position: relative;
			font-size: 50px;
			top: 5px;
		}
		& > p {
			position: relative;
			display: inline;
			font-size: 35px;
			top: 30px;
		}
	}
`;

const H2 = styled.h2(props => ({
	paddingLeft: props.paddingLeft,
}));

const IntroSectionContent = () => {
	return (
		<Container>
			<Logo />
			<TextContent>
				<H2 paddingLeft="20px">
					<span>“</span> 以愛為出發點
				</H2>
				<H2 paddingLeft="80px">
					用音樂藝術關懷人 <p>”</p>
				</H2>
			</TextContent>
		</Container>
	);
};

export default IntroSectionContent;
