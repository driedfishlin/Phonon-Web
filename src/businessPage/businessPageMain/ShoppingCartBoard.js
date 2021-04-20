import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { shoppingCartContext } from '../businessPageMain/BusinessPageMain';
import ShoppingCartBoardList from './component/ShoppingCartBoardList';

//SECTION>

const Background = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Container = styled.div`
	background: #fff;
	overflow: hidden;
	border-radius: 20px;
	* {
		letter-spacing: 1px;
	}
`;
const HeaderBlock = styled.div`
	padding: 40px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	& > h2 {
		font-size: 28px;
		font-weight: 600;
	}
	& > p {
		font-size: 20px;
		& > span {
			font-size: 25px;
			font-weight: 600;
			color: #f50;
		}
	}
`;
const ListBlock = styled.div`
	margin: 0 40px 0 40px;
	overflow-y: scroll;
	max-height: 300px;
`;

const PriceBlock = styled.div`
	padding: 0 40px;
	margin-top: 30px;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	& > h5 {
		font-size: 20px;
		font-weight: 600;
		& > span {
			font-size: 25px;
			font-weight: 600;
			color: #f50;
		}
	}
	& > p {
		font-size: 15px;
	}
`;
const CommitBlock = styled.div`
	padding: 40px;
	margin-top: 30px;
	background: #4c2556;

	& > form {
		& > label {
			font-size: 17px;
			color: white;
			font-weight: 600;
		}
		& > input {
			font-size: 17px;
			box-sizing: border-box;
			padding: 5px 20px;
			height: 35px;
			border-radius: 20px;
			margin: 0 20px 0 10px;
			&:focus {
				outline: none;
			}
		}
		& > button {
			font-size: 17px;
			background: #ac5896;
			color: white;
			border: none;
			border-radius: 20px;
			box-sizing: border-box;
			letter-spacing: 3px;
			padding: 5px 10px 5px 13px;
			font-weight: 600;
			cursor: pointer;
			&:focus {
				outline: none;
			}
			&:hover {
				background: #fff;
				color: #4c2556;
			}
		}
	}
`;

//SECTION>

const stopPropagation = event => event.stopPropagation();

const ShoppingCartBoard = ({ togglePageFn }) => {
	const context = useContext(shoppingCartContext);
	const state = context.shoppingCartState;
	const setState = context.setShoppingCartState;
	console.log(state);
	return (
		<Background onClick={togglePageFn}>
			<Container onClick={stopPropagation}>
				<HeaderBlock>
					<h2>線上預約</h2>
					<p>
						共 <span> 12 </span> 個項目
					</p>
				</HeaderBlock>
				<ListBlock>
					<ShoppingCartBoardList items={state} setItems={setState} />
				</ListBlock>
				<PriceBlock>
					<h5>
						總計 <span> 1200 </span> 元
					</h5>
					<p>
						・五人以上團體用餐，請直接來電詢問訂位
						<br />
						・練習室最長使用時間一次為五小時
						<br />
						・有特殊的器材借調需求，請預先聯絡我們
						<br />
						・本預約系統僅作為畫面展示用途，並無實質功能
						<br />
					</p>
				</PriceBlock>
				<CommitBlock>
					<form>
						<label htmlFor="memberId">會員編號</label>
						<input type="text" id="memberId" name="memberId" />
						<label htmlFor="memberPassword">密碼</label>
						<input
							type="password"
							id="memberPassword"
							name="memberPassword"
						/>
						<button>預約</button>
					</form>
				</CommitBlock>
			</Container>
		</Background>
	);
};

export default ShoppingCartBoard;
