import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_art_logo.svg';

const Container = styled.div`
	// outline: 1px solid white;
	// * {
	// 	outline: 1px solid white;
	// }

	position: absolute;
	right: 0;
	bottom: 0;
	margin: 50px;
	max-width: 38%;
	display: flex;
	// flex: 0 1 1;
`;

const TextBlock = styled.div`
	width: 50%;
	& > p {
		margin-top: 10px;
		padding: 0 10px 0 10px;
		box-sizing: border-box;

		font-size: 17px;
		color: white;
		line-height: 28px;
		letter-spacing: 1px;
		text-indent: 36px;
		text-align: justify;
	}
`;

const LogoBlock = styled.div`
	position: relative;
	width: 50%;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	& > svg {
		position: relative;
		top: 15px;
		margin-bottom: 100px;
		width: 180px;
		& path,
		& polygon,
		& line {
			stroke: none;
			fill: white;
		}
	}
`;

const ButtonBlock = styled.div`
	// position: absolute;
	// bottom: 0;
	// padding-bottom: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > button {
		font-size: 20px;
		font-weight: 600;
		letter-spacing: 2px;
		padding: 5px 8px;
		box-sizing: border-box;
		background: transparent;
		color: white;
		border: 2px solid #fff;
		border-radius: 12px;
		transition: background 0.1s;
		&:hover {
			background: #fff;
			color: #6b7c7d;
		}
	}
`;

const RoomSectionContent = () => {
	return (
		<Container>
			<LogoBlock>
				<Logo>
					<LogoSVG />
				</Logo>
				<ButtonBlock>
					<button>琴房預約</button>
				</ButtonBlock>
			</LogoBlock>
			<TextBlock>
				<p>
					藝棧擁有多間練習室，並提供平台琴、直立琴與各種打擊樂器以供使用。從個人琴房到大型練習室，不管是個人的弦樂、管樂、擊樂或鋼琴演奏者，亦或是多人的團體都可以在這邊找到適合的練習空間。藝棧也擁有演奏廳，給愛好音樂的朋友們一個展現琴藝的舞台，同時提供專業的錄影音服務，為每一場藝術展演留下最美好的紀錄。
					同時藝棧也提供住宿服務，包含了雙人房、背包房等，舉凡個人旅遊、團隊住宿，我們都有符合您需求的房型。
				</p>
				<p>
					我們也提供住宿服務，包含了雙人房、背包房等，舉凡個人旅遊、團隊住宿，我們都有符合您需求的房型。
				</p>
			</TextBlock>
		</Container>
	);
};

export default RoomSectionContent;
