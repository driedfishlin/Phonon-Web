import styled from '@emotion/styled';
import { css } from '@emotion/css';
import ShoppingCartListItem from './ShoppingCartListItem';

const CommoditiesType = ({ type }) => {
	const CommoditiesTypeStyle = css`
		padding: 0 0 0 15px;
		border-radius: 15px;
		margin: 20px 10px 10px 0;
		display: grid;
		grid-template-columns: 25% 15% 30% 15% 15%;
		> p {
			white-space: nowrap;
			font-size: 15px;
			text-align: center;
		}
		@media (max-width: 540px) {
			display: flex;
			flex-wrap: wrap;
			overflow: hidden;
			height: 18px;
			padding: 0;
			> p {
				width: 33%;
				font-size: 13px;
				letter-spacing: 0;
			}
		}
	`;
	if (type === 'room')
		return (
			<div className={CommoditiesTypeStyle}>
				<p>練習室房號</p>
				<p>單價/小時</p>
				<p>時數/小時</p>
				<p>小計</p>
				<p></p>
			</div>
		);
	if (type === 'food')
		return (
			<div className={CommoditiesTypeStyle}>
				<p>餐點名稱</p>
				<p>單價</p>
				<p>數量</p>
				<p>小計</p>
				<p></p>
			</div>
		);
	return null;
};

const Message = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	> p {
		font-size: 20px;
		text-align: center;
	}
`;

const ShoppingCartBoardList = ({ items, setItems }) => {
	const list = [];
	// 針對購物車的內容渲染清單
	for (let type in items) {
		if (items[type].length)
			list.push(<CommoditiesType type={type} key={type} />);
		for (let item in items[type]) {
			list.push(
				<ShoppingCartListItem
					type={type}
					key={items[type][item].name}
					name={items[type][item].name}
					price={items[type][item].price}
					count={items[type][item].count}
					setFn={setItems}
				/>
			);
		}
	}
	console.log(list);

	return (
		<>
			{list.length === 0 ? (
				<Message>
					<p>您未選取任何項目</p>
				</Message>
			) : (
				list
			)}
		</>
	);
};

export default ShoppingCartBoardList;
