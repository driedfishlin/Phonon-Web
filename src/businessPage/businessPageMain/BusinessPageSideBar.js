import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useContext } from 'react';

import { pageStateContext } from '../../App';

const Container = styled.div`
	padding: 30px;
	width: 260px;
	min-width: 260px;
	box-sizing: border-box;
`;

const CommoditiesKind = styled.p`
	font-size: 20px;
	font-weight: 600;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	padding-bottom: 20px;
	margin-bottom: 20px;
	letter-spacing: 1px;
`;

const UnOrderLists = styled.ul`
	& > li {
		height: 45px;
		& > button {
			width: 100%;
			height: 45px;
			text-align: left;
			letter-spacing: 1px;
			font-size: 18px;
			line-height: 45px;
			display: block;
			background: transparent;
			border: none;
			color: black;
			&:focus {
				outline: none;
			}
		}
	}
`;

const ListItem = ({ children, clickFn }) => {
	const context = useContext(pageStateContext);

	const Li = styled.li`
		position: relative;
		& > button {
			cursor: pointer;
			&::before {
				position: absolute;
				top: 0;
				left: -20px;
				content: '〉';
				font-size: 17px;
			}
			&:hover {
				&::before {
					display: block;
				}
			}
		}
	`;
	const generalClass = css`
		&::before {
			display: none;
		}
	`;
	const activeClass = css`
		font-weight: 600;
			display: block;
		}
	`;
	return (
		<Li>
			<button
				onClick={clickFn}
				className={
					context.commoditiesState.filter === children
						? activeClass
						: generalClass
				}
			>
				{children}
			</button>
		</Li>
	);
};

const BusinessPageSideBar = () => {
	const context = useContext(pageStateContext);
	return (
		<Container>
			<CommoditiesKind>琴房預約</CommoditiesKind>
			<UnOrderLists>
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: 'all',
						})
					}
				>
					所有場地
				</ListItem>
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: '獨立練習室',
						})
					}
				>
					獨立練習室
				</ListItem>
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: '室內樂練習室',
						})
					}
				>
					室內樂練習室
				</ListItem>
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: '團體練習室',
						})
					}
				>
					團體練習室
				</ListItem>
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: 'room',
							filter: '演奏廳',
						})
					}
				>
					演奏廳
				</ListItem>
			</UnOrderLists>
		</Container>
	);
};

export default BusinessPageSideBar;
