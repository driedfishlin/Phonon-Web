import React, { useContext, useRef, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import ShoppingCartBoardList from './component/ShoppingCartBoardList';

import { pageStateContext } from '../../App';
import { shoppingCartContext } from '../businessPageMain/BusinessPageMain';

//SECTION> CSS Component

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
	position: relative;
	background: #fff;
	overflow: hidden;
	border-radius: 20px;
	* {
		letter-spacing: 1px;
	}
`;
const HeaderBlock = styled.div`
	padding: 40px;
	margin-top: 10px;
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
	min-height: 350px;
	margin: 0 40px 0 40px;
	overflow-y: scroll;
	max-height: 300px;
	> p {
		font-size: 18px;
		text-align: center;
		padding: 50px 0;
		letter-spacing: 1px;
	}
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
			border: none;
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
			user-select: none;
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

const CloseButton = styled.div`
	position: absolute;
	top: 0px;
	right: 3px;
	padding: 10px;
	> button {
		color: #888;
		cursor: pointer;
		font-size: 20px;
		background: transparent;
		border: none;
		user-select: none;
		:focus {
			outline: none;
		}
	}
`;

// class
const disableClass = css`
	background: rgba(255, 255, 255, 0.5) !important;
	color: #4c2556 !important;
	cursor: not-allowed !important;
	pointer-events: none;
	&:hover {
		background: rgba(255, 255, 255, 0.5) !important;
	}
`;

//SECTION> Function

const stopPropagation = event => event.stopPropagation();

//SECTION> React Component

const ShoppingCartBoard = ({ togglePageFn }) => {
	//PART>
	const formRef = useRef(null);
	const [formState, setFormState] = useState({ id: '', password: '' });
	//PART>
	const onFormChange = event => {
		if (event.target.id === 'memberId')
			setFormState(prev => ({ ...prev, id: event.target.value }));
		if (event.target.id === 'memberPassword')
			setFormState(prev => ({ ...prev, password: event.target.value }));
		if (event.target.value.length >= 6)
			setMessage(prev => ({ ...prev, show: false }));
	};
	// 不符合長度限制時跳出訊息
	const formValidation = event => {
		if (event.target.id === 'memberId' && event.target.value.length < 6)
			return setMessage(prev => ({
				...prev,
				show: true,
				text: '會員編號須大於 6 個字元',
				color: 'red',
			}));
		if (
			event.target.id === 'memberPassword' &&
			event.target.value.length < 6
		)
			return setMessage(prev => ({
				...prev,
				show: true,
				text: '密碼須大於 6 個字元',
				color: 'red',
			}));
		return setMessage(prev => ({ ...prev, show: false }));
	};

	//PART> 取得並統計商品資訊
	const context = useContext(shoppingCartContext);
	const state = context.shoppingCartState;
	const setState = context.setShoppingCartState;
	let totalNum = 0;
	let totalAmount = 0;
	for (const type in state) {
		totalNum += state[type].length;
		for (const item of state[type]) {
			totalAmount += +item.price * item.count;
		}
	}
	//PART> 控制提交表單訊息文字
	const subContext = useContext(pageStateContext);
	const setMessage = subContext.message.setState;
	const submitAndSetMessage = event => {
		event.preventDefault();
		formRef.current.reset();
		setMessage({ show: true, text: '預約成功', color: 'green' });
		setTimeout(() => setMessage(prev => ({ ...prev, show: false })), 3000);
		togglePageFn(event);
		setState({
			room: [],
			food: [],
		});
	};
	//PART>
	return (
		<Background onClick={togglePageFn}>
			<Container onClick={stopPropagation}>
				<HeaderBlock>
					<h2>線上預約</h2>
					<p>
						共 <span> {totalNum} </span> 個項目
					</p>
				</HeaderBlock>
				<ListBlock>
					<ShoppingCartBoardList items={state} setItems={setState} />
				</ListBlock>
				<PriceBlock>
					<h5>
						總計 <span> {totalAmount} </span> 元
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
					<form ref={formRef}>
						<label htmlFor="memberId">會員編號</label>
						<input
							type="text"
							id="memberId"
							name="memberId"
							onChange={onFormChange}
							value={formState.id}
							onBlur={formValidation}
							required
						/>
						<label htmlFor="memberPassword">密碼</label>
						<input
							type="password"
							id="memberPassword"
							name="memberPassword"
							onChange={onFormChange}
							value={formState.password}
							onBlur={formValidation}
							required
						/>
						<button
							type="submit"
							onClick={submitAndSetMessage}
							className={
								formState.id.length < 6 ||
								formState.password.length < 6
									? disableClass
									: null
							}
						>
							預約
						</button>
					</form>
				</CommitBlock>
				<CloseButton>
					<button onClick={togglePageFn}>×</button>
				</CloseButton>
			</Container>
		</Background>
	);
};

export default ShoppingCartBoard;
