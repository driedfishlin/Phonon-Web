import React, { useContext } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../App';

const Container = styled.div`
	position: fixed;
	right: 60px;
	bottom: -100px;
	opacity: 0;
	background: linear-gradient(45deg, #ff6b0c, #f1b51f);
	min-width: 100px;
	height: 80px;
	z-index: 150;
	border-radius: 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
	transition: opacity 0.4s, bottom 1s;
	> p {
		text-align: center;
		font-size: 20px;
		font-weight: 600;
		color: white;
		padding: 20px;
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
`;

const showStyle = {
	bottom: '30px',
	opacity: 1,
	transition: 'opacity 0.5s 0.2s, bottom 0.7s',
};

const MessageComponent = () => {
	const context = useContext(pageStateContext);
	const text = context.message.state.text;
	const show = context.message.state.show;
	const setState = context.message.setState;
	const closeMessage = () => {
		setState(prev => ({ ...prev, show: false }));
	};
	return (
		<Container style={show ? showStyle : null}>
			<p>{text}</p>
			<button onClick={closeMessage}>×</button>
		</Container>
	);
};

export default MessageComponent;
