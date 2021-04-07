/* 入口頁 Section 2 主版面左側的頁籤 */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

const Body = styled.div`
	z-index: 10;
	width: 60px;
	background-color: rgba(255, 255, 255, 1);
	border-radius: 10px 0 0 10px;
	position: relative;
	box-shadow: -1px -3px 6px rgba(0, 0, 0, 0.1);
	&::after {
		z-index: 5;
		box-shadow: 7px 5px 6px rgba(0, 0, 0, 0.1);
		content: '';
		display: block;
		width: 65px;
		height: 20px;
		border-radius: 0 0 0 10px;
		transform: translateY(7px) translateX(-0.5px) rotate(15deg);
	}
	& > a {
		z-index: 6;
		font-size: 20px;
		margin: auto;
		padding: 15px 15px;
		color: black;
		writing-mode: vertical-rl;
		font-weight: 600;
		position: relative;
		top: 17px;
		user-select: none;
		cursor: pointer;
	}
`;

const PhononSectionTabs = ({ name, teamState, setFn, index }) => {
	return (
		<Body
			className={css`
				&::after {
					background: ${teamState === name
						? '#fff'
						: 'linear-gradient(75deg,#fff 77%, rgba(230, 230, 230, 1) 92% )'};
				}
				z-index: ${10 - index};
			`}
			style={{
				background:
					teamState === name
						? '#fff'
						: 'linear-gradient(to right, #fff 85%, rgba(230,230,230,1))',
				zIndex: teamState === name ? 11 : 10 - index,
			}}
		>
			<a onClick={() => setFn(name)}>{name}</a>
		</Body>
	);
};

export default PhononSectionTabs;
