import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_art_logo_text_white.svg';

const Container = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	padding: 35px;
`;

const ContentArea = styled.div`
	width: 1280px;
	margin: 0 auto;
	// display: flex;
	// justify-content: space-between;
	// align-items: center;
`;

const Logo = styled(LogoSVG)`
	height: 80px;
	& path,
	& polygon,
	& line {
		fill: white;
		stroke: none;
	}
`;

const Footer = ({ bgc, height }) => {
	return (
		<Container style={{ background: bgc, height: height }}>
			<ContentArea>
				<Logo />
			</ContentArea>
		</Container>
	);
};

export default Footer;
