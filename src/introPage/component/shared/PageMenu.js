/* 主頁面左下的當前頁面指標，隨畫面移動改變指標位置 */
/* 點選指標的個別按鈕，進入動畫並跳轉至該頁面 */

import React, { useRef, Fragment } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';
import { ReactComponent as LogoSVG } from '../../../image/logo/phonon_art_logo.svg';

//SECTION> Custom Data
// [自訂] 左下按鈕的個數
const buttonCount = 4;
// [自訂] 跳轉動畫遮罩方塊的個數
const maskCount = 4;
// [自訂] 跳轉動畫的總秒數
const animationDuration = 1.5;

//SECTION> Animation Keyframes
const maskKeyframes = keyframes`
    from{
        transform: translateX(-120%);
    }
    40%{
        transform: translateX(-10%);
    }
    60%{
        transform: translateX(-10%);
    }
    to{
        transform: translateX(120%);
    }
`;
const logoKeyframes = keyframes`
    from,25%{
        opacity: 0;
    }
    30%{
        opacity: 1;
    }
    80%{
        opacity: 1;
    }
    85%, to{
        opacity: 0;
    }
`;

//SECTION> CSS Component
const Container = styled.div`
	position: fixed;
	left: 0px;
	bottom: 25%;
	padding: 30px;
	padding-left: 40px;
	z-index: 50;
	display: flex;
	flex-direction: column;
	justify-content: center;
	transition: transform 0.2s;

	&:hover {
		transform: translateY(10%);
		& > a {
			height: 30px;
		}
	}
`;
const Button = styled.a`
	height: 10px;
	width: 10px;
	background-color: rgba(255, 255, 255, 0.1);
	display: block;
	margin: 10px 0;
	border-radius: 10px;
	transition: background-color 0.2s, height 0.2s;
	cursor: pointer;
	border: 1px solid rgba(255, 255, 255, 0.5);
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		transition: background-color 0s, height 0.2s;
	}
`;

// 頁面跳轉動畫的區塊
const MaskContainer = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	display: none;
	z-index: 100;
	& > div {
		width: 120%;
		height: ${100 / maskCount}%;
		background-color: #b55595;
		transform: translateX(-120%);
		border-radius: 1000px;
	}
`;

const Logo = styled(LogoSVG)`
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	width: 200px;
	opacity: 1;
	& path,
	polygon {
		fill: white;
		stroke: none;
	}
	animation-name: ${logoKeyframes};
	animation-duration: ${animationDuration}s;
	animation-timing-function: linear;
`;

//SECTION> CSS Style

const activeStyle = {
	backgroundColor: 'rgba(255, 255, 255, 0.8)',
	cursor: 'default',
};

//SECTION> React Component
const PageMenu = ({ page, changPage }) => {
	const maskRef = useRef(null);
	return (
		<Fragment>
			{console.log('render')}
			<MaskContainer ref={maskRef}>
				{(() => {
					// 產生遮罩
					const arr = [];
					for (let i = 0; i < maskCount; i++) {
						arr.push(
							<div
								key={i}
								className={css`
									animation-name: ${maskKeyframes};
									animation-duration: ${animationDuration}s;
									animation-delay: ${i * 0.05}s;
									animation-timing-function: ease-in-out;
								`}
							/>
						);
					}
					return arr;
				})()}
				<Logo />
			</MaskContainer>
			<Container>
				{(() => {
					// 產生按鈕
					const arr = [];
					for (let i = 0; i < buttonCount; i++) {
						arr.push(
							<Button
								key={i}
								style={i === page - 1 ? activeStyle : null}
								onClick={
									i === page - 1
										? null
										: () => {
												setTimeout(() => {
													window.scrollTo({
														top:
															i *
															window.innerHeight,
													});
													changPage(i + 1);
												}, animationDuration * 500);
												maskRef.current.style.display =
													'block';
												setTimeout(
													() =>
														(maskRef.current.style.display =
															'none'),
													animationDuration * 1000
												);
										  }
								}
							/>
						);
					}
					return arr;
				})()}
			</Container>
		</Fragment>
	);
};

export default PageMenu;
