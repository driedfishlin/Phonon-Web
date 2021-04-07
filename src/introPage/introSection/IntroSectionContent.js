import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

// SVG
import { ReactComponent as PhononLogo } from './../../image/logo/phonon_art_logo.svg';

//SECTION> STATE & Custom data

// 用於紀錄滑鼠觸發上一次事件的座標
let mouseLastMovePosition = {
	x: 0,
	y: 0,
};
// 自訂 Logo 自身飄移速度
const floatAnimationDuration = 3;

//SECTION> CSS ANIMATION KEYFRAMES
const floatKeyframesX = keyframes`
	from{
		transform: translateX(-5px);
	}
	to{
		transform: translateX(5px);
	}
	`;
const floatKeyframesY = keyframes`
	from{
		transform: translateY(-5px);
	}
	to{
		transform: translateY(5px);
	}
	`;
const textSlideKeyframes = keyframes`
	from{
		opacity: 0;
		left: -100px;
	}
	70%{
		left: 0px;
		opacity: 1;

	}
	to{
		left: 0px;
		opacity: 1;

	}
`;
//SECTION> CSS COMPONENT
const Container = styled.div`
	position: absolute;
	top: 20vh;
	left: 15vw;
	transition: transform 1.2s;
	z-index: 15;
`;
const AnimationWrapX = styled.div`
	position: relative;
	animation: ${floatKeyframesX} ${floatAnimationDuration}s
		${-floatAnimationDuration / 2}s infinite ease-in-out alternate;
`;
const AnimationWrapY = styled.div`
	position: relative;
	animation: ${floatKeyframesY} ${floatAnimationDuration * 2}s infinite
		ease-in-out alternate;
`;
const Logo = styled(PhononLogo)`
	& path {
		fill: black;
		stroke: none;
	}
	& polygon {
		fill: black;
		stroke: none;
	}
	width: 170px;
	padding-left: 20px;
	transform: skewX(-17deg) rotate(-17deg) scale(1, 1.3);
`;
const TextContent = styled.div`
	position: relative;
	top: 70px;
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
	position: 'relative',
	left: '-100px',
	opacity: 0,
}));

//SECTION> ClassName

const slideText = css`
	animation-name: ${textSlideKeyframes};
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
`;

//SECTION> React Component
const IntroSectionContent = () => {
	const [logoPositionState, setLogoPositionState] = useState({
		x: 0,
		y: 0,
	});
	//PART> /* logo 依據滑鼠移動方向做出位移回饋 */
	useEffect(() => {
		// 用於限制 logo 偏移值
		let limitX = 0;
		let limitY = 0;
		const limitNum = 50;
		// 操作偏移值並即時更新 Logo 與滑鼠當前的位置資料
		const updateMousePosition = event => {
			// 滑鼠往右走
			if (event.offsetX > mouseLastMovePosition.x && limitX < limitNum) {
				limitX += 1;
				setLogoPositionState(prev => ({ x: -limitX, y: prev.y }));
			}
			// 滑鼠往左走
			if (event.offsetX < mouseLastMovePosition.x && limitX > -limitNum) {
				limitX -= 1;
				setLogoPositionState(prev => ({ x: -limitX, y: prev.y }));
			}
			// 滑鼠往上走
			if (event.offsetY < mouseLastMovePosition.y && limitY > -limitNum) {
				limitY -= 1;
				setLogoPositionState(prev => ({ x: prev, y: -limitY }));
			}
			// 滑鼠往下走
			if (event.offsetY > mouseLastMovePosition.y && limitY < limitNum) {
				limitY += 1;
				setLogoPositionState(prev => ({ x: prev, y: -limitY }));
			}
			// 紀錄此次事件的滑鼠座標，用於下一次事件觸發時做為比較參考
			mouseLastMovePosition.x = event.offsetX;
			mouseLastMovePosition.y = event.offsetY;
		};
		const body = document.querySelector('body');
		body.addEventListener('mousemove', updateMousePosition);
	}, []);
	//PART>
	return (
		<Container
			style={{
				transform: `translateX(${logoPositionState.x}px) translateY(${logoPositionState.y}px)`,
			}}
		>
			<AnimationWrapX className={floatKeyframesX}>
				<AnimationWrapY className={floatKeyframesY}>
					<Logo />
					<TextContent>
						<H2
							paddingLeft="20px"
							className={slideText}
							style={{
								animationDelay: '0.7s',
							}}
						>
							<span>“</span> 以愛為出發點
						</H2>
						<H2
							paddingLeft="80px"
							className={slideText}
							style={{
								animationDelay: '0.5s',
							}}
						>
							用音樂藝術關懷人 <p>”</p>
						</H2>
					</TextContent>
				</AnimationWrapY>
			</AnimationWrapX>
		</Container>
	);
};

export default IntroSectionContent;
