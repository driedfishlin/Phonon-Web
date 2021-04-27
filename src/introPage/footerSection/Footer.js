/*
網頁 footer 區塊
*/

import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_art_logo_text_white.svg';
import { phononInformation as data } from '../../dataTemplate';

import { ReactComponent as FbSvg } from '../../image/icon/facebook-brands.svg';
import { ReactComponent as InsSvg } from '../../image/icon/instagram-brands.svg';

//SECTION>

const Container = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	padding: 35px;
	display: flex;
	align-items: center;
	@media (max-width: 640px) {
		padding: 15px;
	}
`;

const ContentArea = styled.div`
	width: 1280px;
	margin: 0 auto;
	padding: 0 30px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	@media (max-width: 500px) {
		padding: 0 20px;
		position: relative;
	}
`;

const TextContent = styled.div`
	padding-left: 30px;
	flex: auto;
	& > p {
		font-size: 14px;
		color: white;
		letter-spacing: 1px;
		line-height: 20px;
	}
	@media (max-width: 640px) {
		padding-left: 0px;
	}
	@media (max-width: 375px) {
		> p {
			letter-spacing: 0px;
			font-size: 13px;
		}
	}
`;

const Logo = styled(LogoSVG)`
	flex: initial;
	height: 80px;
	& path,
	& polygon,
	& line {
		fill: white;
		stroke: none;
	}
	@media (max-width: 640px) {
		display: none;
	}
`;

const ExternalLink = styled.div`
	display: flex;
	align-items: center;
	flex: initial;
	& > a {
		margin-left: 20px;
	}
	& > a > svg {
		width: 45px;
		& path {
			fill: white;
		}
	}
	@media (max-width: 500px) {
		transform: scale(0.7);
		position: absolute;
		top: -10px;
		right: 0;
	}
	@media (max-width: 375px) {
		transform: scale(0.5);
		right: -15px;
		top: -30px;
	}
`;

//SECTION>

const Footer = ({ bgc, height }) => {
	return (
		<Container style={{ background: bgc, height: height }}>
			<ContentArea>
				<Logo />
				<TextContent>
					<p>電話：{data.tel}</p>
					<p>email：{data.email}</p>
					<p>地址：{data.address}</p>
					<p>營業時間：{data.openingHoursDescription}</p>
				</TextContent>
				<ExternalLink>
					<a
						href={data.facebook}
						title="前往 Facebook"
						target="_blank"
						rel="noreferrer noopener"
					>
						<FbSvg comment="This icon comes from FONTAWESOME. https://fontawesome.com/" />
					</a>
					<a
						href={data.instagram}
						title="前往 Instagram"
						target="_blank"
						rel="noreferrer noopener"
					>
						<InsSvg comment="This icon comes from FONTAWESOME. https://fontawesome.com/" />
					</a>
				</ExternalLink>
			</ContentArea>
		</Container>
	);
};

export default Footer;
