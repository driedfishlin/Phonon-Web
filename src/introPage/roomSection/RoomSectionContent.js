import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../../App';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_art_logo.svg';

const Container = styled.div`
	// outline: 1px solid #fff;
	// * {
	// 	outline: 1px solid #fff;
	// }
	z-index: 11;
	position: relative;
	margin-bottom: 12%;
	box-sizing: border-box;
	display: flex;
	min-width: 480px;
	max-width: 500px;
	@media (max-width: 1024px) {
		position: absolute;
		top: 50%;
		right: 10%;
		transform: translateY(-50%);
	}
	@media (max-width: 600px) {
		flex-direction: column;
		width: 100%;
		min-width: auto;
		max-width: none;
		right: 0;
		top: 0;
		transform: translateY(0);
		margin-bottom: 0px;
		align-items: center;
		margin-top: 130px;
	}
	@media (max-width: 375px) {
		margin-top: 115px;
	}
`;

const TextBlock = styled.div`
	width: 60%;
	& > p {
		padding: 0 0px 0 20px;
		box-sizing: border-box;
		font-size: 17px;
		color: white;
		line-height: 28px;
		letter-spacing: 1px;
		text-indent: 36px;
		text-align: justify;
	}
	@media (max-width: 600px) {
		margin-top: 0px;
		width: 100%;
		box-sizing: border-box;
		padding: 40px;
		> p {
			font-size: 20px;
			padding: 0;
			line-height: 35px;
		}
	}
	@media (max-width: 500px) {
		> p {
			font-size: 18px;
			padding: 0;
			line-height: 30px;
		}
	}
	@media (max-width: 430px) {
		padding: 0 40px 20px 40px;
		> p {
			font-size: 16px;
		}
	}
	@media (max-width: 374px) {
		> p:nth-child(2) {
			display: none;
		}
	}
`;

const LogoBlock = styled.div`
	position: relative;
	width: 40%;
	@media (max-width: 600px) {
		display: flex;
		width: 100%;
		justify-content: center;
	}
	@media (max-width: 430px) {
		order: 2;
	}
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	& > svg {
		position: relative;
		top: 15px;
		margin-bottom: 100px;
		height: 400px;
		& path,
		& polygon,
		& line {
			stroke: none;
			fill: white;
		}
		@media (max-width: 600px) {
			height: 200px;
			top: auto;
			margin-bottom: 0px;
			margin: 0 20px;
		}
	}
	@media (max-width: 430px) {
		display: none;
	}
`;

const ButtonBlock = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	& > button {
		user-select: none;
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
		cursor: pointer;
		&:hover {
			background: #fff;
			color: #6b7c7d;
		}
		&:focus {
			outline: none;
		}
	}
	@media (max-width: 600px) {
		width: auto;
		margin: 0 20px;
		align-items: flex-end;
		& > button {
			font-size: 25px;
		}
	}
	@media (max-width: 430px) {
		> button {
			font-size: 20px;
		}
	}
`;

const RoomSectionContent = () => {
	const context = useContext(pageStateContext);
	return (
		<Container>
			<LogoBlock>
				<Logo>
					<LogoSVG />
				</Logo>
				<ButtonBlock>
					<button
						onClick={() => {
							context.switchToBusinessPage();
							context.setCommoditiesState({
								type: 'room',
								filter: 'all',
							});
						}}
					>
						琴房預約
					</button>
				</ButtonBlock>
			</LogoBlock>
			<TextBlock>
				<p>
					藝棧擁有多間練習室，並提供平台琴、直立琴與各種打擊樂器以供使用。從個人琴房到大型練習室，不管是個人的弦樂、管樂、擊樂或鋼琴演奏者，亦或是多人的團體都可以在這邊找到適合的練習空間。藝棧也擁有演奏廳，給愛好音樂的朋友們一個展現琴藝的舞台，同時提供專業的錄影音服務，為每一場藝術展演留下最美好的紀錄。
				</p>
				<p>
					我們也提供住宿服務，包含了雙人房、背包房等，舉凡個人旅遊、團隊住宿，我們都有符合您需求的房型。
				</p>
			</TextBlock>
		</Container>
	);
};

export default RoomSectionContent;
