import styled from '@emotion/styled';

import DateText from './component/dateText/DateText';
import BusinessPageNavBar from './component/businessPageNavBar/BusinessPageNavBar';

import { phononInformation as data } from '../../dataTemplate';

import { ReactComponent as ArtLogo } from '../../image/logo/phonon_art_logo.svg';
import { ReactComponent as CoffeeLogo } from '../../image/logo/phonon_cafe_logo.svg';
import { ReactComponent as FbSvg } from '../../image/icon/facebook-brands.svg';
import { ReactComponent as InsSvg } from '../../image/icon/instagram-brands.svg';

const Container = styled.div`
	min-height: 200px;
	max-width: 1280px;
	margin: 0 auto;
	margin-top: 20px;
	padding: 30px;
	box-sizing: border-box;
	// display: flex;
	// justify-content: space-between;
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
`;

const LogoArea = styled.div`
	flex: initial;
	& > h1 {
		position: absolute;
		overflow: hidden;
		white-space: nowrap;
		text-indent: 101%;
		font-size: 20px;
	}
	& > button {
		background-color: transparent;
		border: none;
		display: flex;
		align-items: center;
		cursor: pointer;
		&:focus {
			outline: none;
		}
		& > svg {
			height: 150px;

			& path,
			& line,
			& polygon {
				stroke: none;
				fill: black;
			}
		}
		& > p {
			margin: 10px;
			font-size: 20px;
		}
	}
`;

// const Title = styled.h2`
// 	font-size: 25px;
// 	line-height: 25px;
// 	font-weight: 600;
// 	flex: auto;
// 	height: 25px;
// 	margin-left: 20px;
// 	align-self: flex-end;
// 	text-align: center;
// 	letter-spacing: 2px;
// `;

const OtherContent = styled.div`
	display: flex;
	flex: initial;
	flex-direction: column;
	justify-content: space-between;
	& > p,
	& > p > span {
		font-size: 17px;
		color: black;
		line-height: 17px;
		letter-spacing: 1px;
	}
`;

const ExternalLink = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	flex: initial;
	& > a {
		margin-left: 20px;
	}
	& > a > svg {
		width: 45px;
		& path {
			fill: black;
		}
	}
`;

const BusinessPageHeader = ({ changePage }) => {
	return (
		<Container>
			<Main>
				<LogoArea>
					<h1>聲子藝棧 × 聲子咖啡</h1>
					<button onClick={() => changePage('introPage')}>
						<ArtLogo />
						<p>×</p>
						<CoffeeLogo />
					</button>
				</LogoArea>
				{/* <Title>線上預約系統</Title> */}
				<OtherContent>
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
					<DateText />
				</OtherContent>
			</Main>
			<BusinessPageNavBar />
		</Container>
	);
};

export default BusinessPageHeader;
