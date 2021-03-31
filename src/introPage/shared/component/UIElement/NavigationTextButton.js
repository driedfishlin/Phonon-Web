import React from 'react';
import styled from '@emotion/styled';

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
`;

const NavigationTextButton = ({ text, clickFn }) => {
	return (
		<Button>
			<Anchor onClick={clickFn ? clickFn : null}>{text}</Anchor>
		</Button>
	);
};

export default NavigationTextButton;
