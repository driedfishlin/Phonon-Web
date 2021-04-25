import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import NavMenuButton from './NavMenuButton';

import { pageStateContext } from '../../../App';
import { commoditiesInfo } from '../../../dataTemplate';

const Background = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
`;

const Container = styled.div`
	background: linear-gradient(120deg, #fcf7df, #fefdf9);
	height: 100%;
	width: 370px;
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
	border-radius: 30px 0 0 30px;
	transition: transform 0.5s;
`;

const ListBlock = styled.div`
	position: absolute;
	bottom: 10%;
	left: 50%;
	transform: translateX(-50%);
	box-sizing: border-box;

	 > h6 {
		font-size: 24px;
		font-weight: 600;
		letter-spacing: 1px;
		margin: 70px 0 20px 0;
	}
	ul > li {
	}
	> li > button {
		font-size: 17px;
		list-style: none;
		letter-spacing: 1px;
		margin-bottom: 10px;
		background: transparent;
		border: none;
		cursor: pointer;
		padding: 10px;
		:hover {
			outline: none;
		}
	}
`;

const hideClass = css`
	transform: translateX(100%);
`;

const moveButtonClass = css`
	transform: translateX(-120px);
`;

const NavSideMenu = ({ page, useSideNavMenuState }) => {
	const context = useContext(pageStateContext);
	const [sideMenuState, setSideMenuState] = useSideNavMenuState;
	// 控制選單顯示切換
	const toggleSideMenu = () => {
		setSideMenuState(prev => {
			if (prev.isOpen === false) {
				document.documentElement.style.overflowY = 'hidden';
				console.log(true);
			} else {
				document.documentElement.style.overflowY = 'auto';
				console.log(false);
			}
			return { ...prev, isOpen: !prev.isOpen };
		});
	};
	return (
		<>
			{sideMenuState.isOpen ? (
				<Background onClick={toggleSideMenu} />
			) : null}
			<Container className={sideMenuState.isOpen ? null : hideClass}>
				<NavMenuButton
					propClass={moveButtonClass}
					page={page}
					clickFn={toggleSideMenu}
					isOpen={sideMenuState.isOpen}
				/>
				<ListBlock>
					<h6>琴房預約</h6>
					{commoditiesInfo.room.map(item => (
						<li key={item.nameEng}>
							<button
								onClick={() => {
									context.switchToBusinessPage();
									context.setCommoditiesState({
										type: 'room',
										filter: item.nameTc,
									});
								}}
							>
								{item.nameTc}
							</button>
						</li>
					))}
					<h6>餐點訂製</h6>
					{commoditiesInfo.food.map(item => (
						<li key={item.nameEng}>
							<button
								onClick={() => {
									context.switchToBusinessPage();
									context.setCommoditiesState({
										type: 'food',
										filter: item.nameTc,
									});
								}}
							>
								{item.nameTc}
							</button>
						</li>
					))}
				</ListBlock>
			</Container>
		</>
	);
};

export default NavSideMenu;
