/*
購物車頁的 header
*/
import styled from '@emotion/styled';
import { useContext } from 'react';

import { pageStateContext } from '../../App';

import DateText from './component/dateText/DateText';
import BusinessPageNavBar from './component/businessPageNavBar/BusinessPageNavBar';

import { phononInformation as data } from '../../dataTemplate';

import { ReactComponent as ArtLogo } from '../../image/logo/phonon_art_logo.svg';
import { ReactComponent as CoffeeLogo } from '../../image/logo/phonon_cafe_logo.svg';
import { ReactComponent as FbSvg } from '../../image/icon/facebook-brands.svg';
import { ReactComponent as InsSvg } from '../../image/icon/instagram-brands.svg';

//SECTION>

const Container = styled.div`
	min-height: 200px;
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	margin-top: 20px;
	padding: 30px;
	box-sizing: border-box;
`;

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 30px;
	@media (max-width: 500px) {
		flex-direction: column;
	}
`;

const LogoArea = styled.div`
	flex: initial;
	& > h1 {
		width: 10px;
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
	@media (max-width: 500px) {
		> button {
			position: relative;
			left: 50%;
			transform: translateX(-50%);
		}
	}
`;

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
	@media (max-width: 500px) {
		> p {
			text-align: center;
			margin-top: 20px;
		}
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
	@media (max-width: 500px) {
		display: none;
	}
`;

//SECTION>

const BusinessPageHeader = () => {
	const context = useContext(pageStateContext);
	return (
		<Container>
			<Main>
				<LogoArea>
					<h1>聲子藝棧 × 聲子咖啡</h1>
					<button onClick={context.switchToIntroPage}>
						<ArtLogo />
						<p>×</p>
						<CoffeeLogo />
					</button>
				</LogoArea>
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
