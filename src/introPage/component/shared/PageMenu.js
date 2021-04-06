/* 主頁面左下的當前頁面指標，隨畫面移動改變指標位置 */

import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	position: fixed;
	left: 0px;
	bottom: 7%;
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
	&:hover {
		background-color: rgba(255, 255, 255, 0.3);
		transition: background-color 0s, height 0.2s;
	}
`;

const activeStyle = {
	backgroundColor: 'rgba(255, 255, 255, 0.6)',
};

// [自訂]按鈕的個數
const buttonCount = 5;

const PageMenu = ({ page, changPage }) => {
	return (
		<Container>
			{(() => {
				const arr = [];
				for (let i = 0; i < buttonCount; i++) {
					arr.push(
						<Button
							key={i}
							style={i === page - 1 ? activeStyle : null}
							onClick={() => {
								window.scrollTo({
									top: i * window.innerHeight,
								});
								changPage(i + 1);
							}}
						/>
					);
				}
				return arr;
			})()}
		</Container>
	);
};

export default PageMenu;
