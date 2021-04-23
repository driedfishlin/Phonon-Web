import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { shoppingCartContext } from '../BusinessPageMain';

import { ReactComponent as ClipBroad } from '../../../image/icon/clipboard-regular.svg';
//SECTION>
const Container = styled.form`
	padding: 30px;
	padding-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > label {
		font-size: 20px;
		padding-right: 15px;
	}
	& > input,
	& > select {
		height: 30px;
		font-size: 18px;
		border-radius: 25px;
		margin-right: 25px;
		padding: 5px 13px;
		border: 2px solid #000;
		box-sizing: content-box;
		text-align: center;
		-webkit-appearance: none;
		max-width: 180px;
		&:focus {
			outline: none;
		}
		> option {
			font-size: 15px;
		}
	}
`;

const ClipBroadContainer = styled.div`
	flex: auto;
	position: relative;
	& > button {
		float: right;
		cursor: pointer;
		border: none;
		background: transparent;
		:focus {
			outline: none;
		}
	}
	& svg {
		width: 27px;
	}
`;
//SECTION>

const date = new Date().toISOString();
const dateNow = date.split('T')[0];
let timeNow = date.split('T')[1].split('.')[0].split(':');
timeNow.pop(2);
timeNow = timeNow.join(':');

//SECTION>
const SelectDateBlock = ({ togglePageFn }) => {
	const context = useContext(shoppingCartContext);
	// 購物車圖示上，顯示當前被選取的商品數量
	const commoditiesCount =
		context.shoppingCartState.room.length +
		context.shoppingCartState.food.length;
	const showCommoditiesCount = css`
		&::after {
			font-family: -apple-system, BlinkMacSystemFont, '微軟正黑體';
			content: '${commoditiesCount}';
			font-size: 10px;
			font-weight: 600;
			text-align: center;
			line-height: 15px;
			color: #fff;
			display: block;
			position: absolute;
			background-color: #f30;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			top: 0;
			right: -6px;
		}
	`;
	return (
		<Container>
			<label htmlFor="reservation_date">預約日期</label>
			<input type="date" id="reservation_date" placeholder={dateNow} />
			<label htmlFor="reservation_time">時間</label>
			<input type="time" id="reservation_time" placeholder={timeNow} />
			<label htmlFor="numOfUsers">人數</label>
			<select style={{ textAlign: 'center', textAlignLast: 'center' }}>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
				<option value={'else'}>其他</option>
			</select>
			<ClipBroadContainer>
				<button
					onClick={togglePageFn}
					className={commoditiesCount ? showCommoditiesCount : null}
				>
					<ClipBroad />
				</button>
			</ClipBroadContainer>
		</Container>
	);
};

export default SelectDateBlock;
