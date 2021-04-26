/* 作為頁面右下角浮動的訊息視窗元件，
搭配存於 App.js 的 messageState 狀態使用，
可指定顏色、訊息文字、控制是否顯示 */

import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../App';

//SECTION>

const Container = styled.div`
	position: fixed;
	right: 60px;
	bottom: 0;
	transform: translateY(100%);
	opacity: 0;
	background: linear-gradient(45deg, #ff6b0c, #f1b51f);
	min-width: 100px;
	height: auto;
	z-index: 150;
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
	transition: opacity 0.4s, transform 1s;
	> p {
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		color: white;
		// padding: 20px;
		letter-spacing: 2px;
		margin: 20px;
	}
	> button {
		font-size: 20px;
		background: transparent;
		border: none;
		margin: 0 20px;
		font-weight: 600;
		color: white;
		cursor: pointer;
		:focus {
			outline: none;
		}
	}
	@media (max-width: 680px) {
		> p {
			font-size: 16px;
		}
	}
	@media (max-width: 570px) {
		right: auto;
		margin: 0 20px;
		// transform: translate(-50%, 100%);
	}
`;

//SECTION>

const MessageComponent = () => {
	const context = useContext(pageStateContext);
	const text = context.message.state.text;
	const show = context.message.state.show;
	const setState = context.message.setState;
	//
	let color = context.message.state.color;
	switch (color) {
		case 'red':
			color = 'linear-gradient(45deg, #E31D09, #E99707)';
			break;
		case 'green':
			color = 'linear-gradient(45deg, #53D237, #2BD39E)';
			break;
		case 'yellow':
			color = 'linear-gradient(45deg, #ff6b0c, #f1b51f)';
			break;
		default:
			color = 'linear-gradient(45deg, #ff6b0c, #f1b51f)';
	}
	const showStyle = {
		transform: 'translateY(-50%)',
		opacity: 1,
		transition: 'opacity 0.5s 0.2s, transform 0.7s',
		background: color,
	};
	//
	const closeMessage = () => {
		setState(prev => ({ ...prev, show: false }));
	};
	return (
		<Container style={show ? showStyle : { background: color }}>
			<p>{text}</p>
			<button onClick={closeMessage}>×</button>
		</Container>
	);
};

export default MessageComponent;
