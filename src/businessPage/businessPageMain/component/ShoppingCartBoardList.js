// import React, { useContext } from 'react';
// import styled from '@emotion/styled';
import { css } from '@emotion/css';
import ShoppingCartListItem from './ShoppingCartListItem';

// import { shoppingCartContext } from '../businessPageMain/BusinessPageMain';

const CommoditiesType = ({ type }) => {
	const CommoditiesTypeStyle = css`
		// background: #f7f6f8;
		padding: 0 0 0 15px;
		border-radius: 15px;
		margin: 20px 10px 10px 0;
		display: grid;
		grid-template-columns: 25% 15% 40% 10% 10%;
		> p {
			font-size: 15px;
			text-align: center;
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

	return <>{list.length === 0 ? <p>您未選取任何項目</p> : list}</>;
};

export default ShoppingCartBoardList;
