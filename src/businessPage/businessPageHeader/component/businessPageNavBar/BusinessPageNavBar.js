import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { pageStateContext } from '../../../../App';

const Container = styled.div`
	height: 60px;
	position: relative;
	border-top: 1px solid #999;
	border-bottom: 3px solid #000;
`;

const Anchor = styled.a`
	font-size: 17px;
	display: inline-block;
	height: 60px;
	line-height: 60px;
	text-decoration: none;
	color: black;
	padding: 0 20px;
	letter-spacing: 3px;
	font-weight: 600;
	user-select: none;
	cursor: pointer;
`;

const UnOrderedLists = styled.ul`
	display: flex;
	> li {
		position: relative;
		& > div {
			height: 3px;
			position: absolute;
			width: 1px;
			left: 50%;
			bottom: -3px;
            transform: translateX(-50%);
			background-color: #ac25a6;
            transition: width 0.3s, opacity 0s 0.3s;
            opacity: 0;
		}
	}
	> li:hover > div {
        transition: width 0.3s, opacity 0s;
        opacity:1;
        width: 100%;
		}
		@media (max-width: 500px) {
			justify-content: center;
		}
	}
`;

const List = ({ children, clickFn, propClass }) => {
	return (
		<li className={propClass}>
			<Anchor href={null} onClick={clickFn}>
				{children}
			</Anchor>
			<div />
		</li>
	);
};

const BusinessPageNavBar = () => {
	const context = useContext(pageStateContext);
	return (
		<Container>
			<UnOrderedLists>
				<List
					clickFn={context.switchToIntroPage}
					propClass={css`
						@media (max-width: 440px) {
							display: none !important;
						}
					`}
				>
					首頁
				</List>
				<List
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: 'all',
						})
					}
				>
					琴房預約
				</List>
				<List
					clickFn={() =>
						context.setCommoditiesState({
							type: 'food',
							filter: 'all',
						})
					}
				>
					餐點訂製
				</List>
			</UnOrderedLists>
		</Container>
	);
};
export default BusinessPageNavBar;
