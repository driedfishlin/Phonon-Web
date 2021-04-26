/*
浮動於入口頁視窗上緣的導覽列之按鈕
*/

import React from 'react';
import styled from '@emotion/styled';

//SECTION>

const Button = styled.li`
	display: inline-block;
	margin: 0 8px;
`;

const Anchor = styled.a`
	position: relative;
	${/* 修正加上邊線造成的上下距不平均 */ ''}
	top: 5px;
	font-size: 16px;
	text-decoration: none;
	color: white;
	letter-spacing: 2px;
	line-height: 90px;
	cursor: pointer;
	user-select: none;
	padding: 10px 20px;
	font-weight: 400;
	filter: none;
	transition: filter 0.2s;
	&:hover {
		filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
	}
	&::before {
		content: '';
		display: block;
		width: 2px;
		height: 14px;
		background-color: white;
		position: absolute;
		top: 15px;
		left: 10px;
	}
`;

//SECTION>

const NavigationTextButton = ({ children, clickFn }) => {
	return (
		<Button>
			<Anchor onClick={clickFn ? clickFn : null}>{children}</Anchor>
		</Button>
	);
};

export default NavigationTextButton;
