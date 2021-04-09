import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as LogoSVG } from '../../image/logo/phonon_cafe_logo.svg';

const Container = styled.div`
	position: absolute;
	lift: 0;
	bottom: 3%;
	margin: 50px;
	max-width: 500px;
	display: flex;
	align-items: flex-end;
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
`;

const LogoBlock = styled.div`
	width: 50%;
`;

const Logo = styled.div`
	display: flex;
	justify-content: center;
	& > svg {
		position: relative;
		top: 15px;
		margin-bottom: 50px;
		width: 150px;
		& path,
		& polygon,
		& line {
			stroke: none;
			fill: black;
		}
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
`;

const CoffeeSectionContent = ({ clickFn }) => {
	return (
		<Container>
			<LogoBlock>
				<Logo>
					<LogoSVG />
				</Logo>
				<ButtonBlock>
					<button onClick={clickFn}>餐點訂製</button>
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
