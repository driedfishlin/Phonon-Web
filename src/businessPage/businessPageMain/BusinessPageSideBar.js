import styled from '@emotion/styled';
import { css } from '@emotion/css';
import { useContext } from 'react';
import { pageStateContext } from '../../App';
import { commoditiesInfo } from '../../dataTemplate';

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
			<UnOrderLists>
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
			</UnOrderLists>
		</Container>
	);
};

export default BusinessPageSideBar;
