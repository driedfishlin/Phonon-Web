import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_art_logo_text_white.svg';
import { phononInformation as data } from '../../dataTemplate';

import { ReactComponent as FbSvg } from '../../image/icon/facebook-brands.svg';
import { ReactComponent as InsSvg } from '../../image/icon/instagram-brands.svg';

const Container = styled.div`
	overflow: hidden;
	box-sizing: border-box;
	padding: 35px;
	// * {
	// 	outline: 1px solid #fff;
	// }
`;

const ContentArea = styled.div`
	width: 1280px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	// align-items: center;
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
`;

// 地址、電話、粉專、信箱、地圖
// icon

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
					>
						<FbSvg />
					</a>
					<a
						href={data.instagram}
						title="前往 Instagram"
						target="_blank"
					>
						<InsSvg />
					</a>
				</ExternalLink>
			</ContentArea>
		</Container>
	);
};

export default Footer;
