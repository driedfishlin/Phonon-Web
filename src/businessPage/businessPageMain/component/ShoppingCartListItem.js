/*
購物車中，個別商品的容器元件。
*/

import styled from '@emotion/styled';

//SECTION>

const Container = styled.div`
	background: #f7f6f8;
	padding: 25px 0 25px 15px;
	border-radius: 15px;
	margin: 10px 10px 10px 0;
	display: grid;
	grid-template-columns: 25% 15% 30% 15% 15%;
	@media (max-width: 540px) {
		display: flex;
		flex-wrap: wrap;
		height: 120px;
		justify-content: space-between;
		padding: 25p 5px 25px 5px;
		> div {
			width: 33%;
		}
	}
`;

const Name = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	> h6 {
		font-size: 17px;
		text-align: center;
	}
	@media (max-width: 540px) {
		margin: 0 -10px;

		> h6 {
			font-size: 15px;
		}
	}
`;

const Price = styled.div`
	position: relative;
	> p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-size: 17px;
	}
	@media (max-width: 540px) {
		margin: 0 -10px 0 10px;
		left: -10px;
	}
`;

const Count = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	> input {
		text-align: center;
		font-size: 17px;
		width: 28px;
		border: none;
		background: transparent;
	}
	> button {
		letter-spacing: 0;
		font-size: 15px;
		line-height: 20px;
		border-radius: 50%;
		border: none;
		width: 25px;
		height: 25px;
		background: transparent;
		border: 1px solid #000;
		margin: 0 10px;
		cursor: pointer;
		:focus {
			outline: none;
		}
	}
	@media (max-width: 540px) {
		margin: 0 10px;
		left: -7px;
		> input {
			font-size: 17px;
			width: 25px;
		}
		> button {
			font-size: 17px;
			width: 20px;
			height: 20px;
			min-width: 20px;
			line-height: 16px;
		}
	}
`;

const Sum = styled.div`
	position: relative;

	> p {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		text-align: center;
		font-size: 17px;
		white-space: nowrap;
	}
	@media (max-width: 540px) {
		order: 5;
		flex: 2;
		> p {
			width: 100%;
			text-align: right;
			white-space: nowrap;
			padding-right: 10px;
			> span {
				margin: 5px;
				font-size: 20px;
			}
		}
	}
`;

const DeleteButton = styled.div`
	position: relative;
	> button {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 14px;
		padding: 2px 2px 2px 3px;
		background: transparent;
		border-radius: 5px;
		border: solid 1px #f50;
		color: #f50;
		font-family: -apple-system, BlinkMacSystemFont, '微軟正黑體';
		cursor: pointer;
		:focus {
			outline: none;
		}
	}
	@media (max-width: 540px) {
		order: 4;
	}
`;

//SECTION>

const ShoppingCartListItem = ({ name, price, type, setFn, count }) => {
	//PART>
	const increaseOrDecreaseQuantity = action => {
		setFn(prev => {
			// 用深拷貝避免修改到 prev 造成計算不精準
			const newState = JSON.parse(JSON.stringify(prev));
			let itemRef = newState[type].find(item => item.name === name);
			if (action === 'plus') {
				if (type === 'room' && itemRef.count < 5) itemRef.count += 0.5;
				if (type === 'food' && itemRef.count < 10) ++itemRef.count;
			}
			if (action === 'less') {
				if (type === 'room' && itemRef.count > 0.5)
					itemRef.count -= 0.5;
				if (type === 'food' && itemRef.count > 1) --itemRef.count;
			}
			return newState;
		});
	};
	const deleteCommodity = () => {
		setFn(prev => {
			const newState = { ...prev };
			const newList = prev[type].filter(item => item.name !== name);
			newState[type] = newList;
			return newState;
		});
	};
	//PART>
	return (
		<Container>
			<Name>
				<h6>{name}</h6>
			</Name>
			<Price>
				<p>{price}</p>
			</Price>
			<Count>
				<button onClick={() => increaseOrDecreaseQuantity('less')}>
					－
				</button>
				<input type="text" readOnly value={count} />
				<button
					onClick={() => {
						increaseOrDecreaseQuantity('plus');
					}}
				>
					＋
				</button>
			</Count>
			<Sum>
				<p>
					<span>小計</span>
					{count * price}
					<span>元</span>
				</p>
			</Sum>
			<DeleteButton>
				<button onClick={deleteCommodity}>刪除</button>
			</DeleteButton>
		</Container>
	);
};

export default ShoppingCartListItem;
