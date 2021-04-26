/*
商品頁的商品分類清單，作為按鈕切換所顯示的商品分類。
*/

import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useContext } from 'react';
import { pageStateContext } from '../../App';
import { commoditiesInfo } from '../../dataTemplate';

//SECTION>

const Container = styled.div`
	padding: 30px;
	width: 260px;
	min-width: 260px;
	box-sizing: border-box;
	@media (max-width: 767px) {
		width: 100%;
		> ul {
			display: flex;
			flex-wrap: wrap;
		}
	}
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

//SECTION>

const ListItem = ({ children, clickFn }) => {
	const context = useContext(pageStateContext);

	const Li = styled.li`
		height: 45px;
		position: relative;
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
			cursor: pointer;
			&:focus {
				outline: none;
			}
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
		@media (max-width: 767px) {
			margin-bottom: 20px;
			button {
				font-size: 16px;
				width: auto;
				margin-right: 20px;
				border: 2px solid #000;
				border-radius: 20px;
				padding: 5px 10px;
				display: inline;
				line-height: 20px;
				color: white;
				background: #000;
				::before {
					opacity: 0;
				}
			}
		}
	`;
	const generalClass = css`
		&::before {
			display: none;
		}

		@media (max-width: 767px) {
			color: black !important;
			background: #fff !important;
		}
	`;
	const activeClass = css`
		font-weight: 600;
			display: block;
		}
	`;
	return (
		<Li>
			{/* {console.log(children)} */}
			<button
				onClick={clickFn}
				className={
					// 用於判斷是否為當前所顯示的分類，並針對 all 分類例外處理
					context.commoditiesState.filter === children ||
					(context.commoditiesState.filter === 'all' &&
						(children.includes('所有場地') ||
							children.includes('所有品項')))
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
	const list = commoditiesInfo[context.commoditiesState.type];
	// console.log(list);
	return (
		<Container>
			<CommoditiesKind>
				{context.commoditiesState.type === 'room' && '琴房預約'}
				{context.commoditiesState.type === 'food' && '餐點訂製'}
			</CommoditiesKind>
			<ul>
				{/* 「所有產品」之按鈕 */}
				<ListItem
					clickFn={() =>
						context.setCommoditiesState({
							type: context.commoditiesState.type,
							filter: 'all',
						})
					}
				>
					{context.commoditiesState.type === 'room' && '所有場地'}
					{context.commoditiesState.type === 'food' && '所有品項'}
				</ListItem>
				{/* 其餘按鈕 */}
				{list.map(item => (
					<ListItem
						key={item.nameEng}
						clickFn={() =>
							context.setCommoditiesState({
								type: context.commoditiesState.type,
								filter: item.nameTc,
							})
						}
					>
						{item.nameTc}
					</ListItem>
				))}
			</ul>
		</Container>
	);
};

export default BusinessPageSideBar;
