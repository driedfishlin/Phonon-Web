import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../../App';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_cafe_logo.svg';

const Container = styled.div`
	// outline: 1px solid #000;
	// * {
	// 	outline: 1px solid #000;
	// }
	position: absolute;
	lift: 0;
	bottom: 3%;
	margin: 50px;
	max-width: 500px;
	display: flex;
	align-items: flex-end;
	z-index: 11;
	@media (max-width: 600px) {
		width: 100%;
		margin: 0;
		bottom: 10%;
		flex-direction: column;
		align-items: center;
		margin: 0;
		max-width: none;
	}
`;

const TextBlock = styled.div`
	width: 50%;
	& > p {
		margin-top: 15px;
		padding: 0 10px 0 10px;
		box-sizing: border-box;

		font-size: 17px;
		color: black;
		line-height: 28px;
		letter-spacing: 1px;
		text-indent: 36px;
		text-align: justify;
	}
	@media (max-width: 600px) {
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
		padding: 20px 40px;
		> p {
			font-size: 16px;
		}
	}
`;

const LogoBlock = styled.div`
	width: 50%;
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
		margin-bottom: 50px;
		height: 400px;
		& path,
		& polygon,
		& line {
			stroke: none;
			fill: black;
		}
	}
	@media (max-width: 600px) {
		> svg {
			height: 200px;
			margin: 0 20px;
			top: 0;
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
		color: black;
		border: 2px solid #000;
		border-radius: 12px;
		transition: background 0.1s;
		cursor: pointer;
		&:hover {
			background: #000;
			color: #f8dc54;
		}
		&:focus {
			outline: none;
		}
	}
	@media (max-width: 600px) {
		width: auto;
		align-items: flex-end;
		margin: 0 20px;
		> button {
			font-size: 25px;
		}
	}
	@media (max-width: 430px) {
		> button {
			font-size: 20px;
		}
	}
`;

const CoffeeSectionContent = () => {
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
								type: 'food',
								filter: 'all',
							});
							window.scrollTo({ top: 0 });
						}}
					>
						餐點訂製
					</button>
				</ButtonBlock>
			</LogoBlock>
			<TextBlock>
				<p>
					聲子咖啡以精選的咖啡豆，推出高品質濃醇精緻的手沖咖啡。並且每天提供不同的各式糕點與甜品，您可以預約訂製，或是在店內享用，一邊聆賞我們播放的精選音樂。結合藝棧的展覽空間，讓人想花上整個下午在此沐浴藝術人文的氛圍。
				</p>
			</TextBlock>
		</Container>
	);
};

export default CoffeeSectionContent;
