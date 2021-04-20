import styled from '@emotion/styled';

const Container = styled.div`
	background: #f7f6f8;
	padding: 25px 0 25px 15px;
	border-radius: 15px;
	margin: 10px 10px 10px 0;
	display: grid;
	grid-template-columns: 25% 15% 40% 10% 10%;
`;
const Name = styled.div`
	> h6 {
		font-size: 17px;
		text-align: center;
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
`;
const Count = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	> input {
		text-align: center;
		font-size: 17px;
		width: 50px;
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
`;

const ShoppingCartListItem = ({ name, price, type, setFn, count }) => {
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
						console.log('+');
						increaseOrDecreaseQuantity('plus');
					}}
				>
					＋
				</button>
			</Count>
			<Sum>
				<p>{count * price}</p>
			</Sum>
			<DeleteButton>
				<button>刪除</button>
			</DeleteButton>
		</Container>
	);
};

export default ShoppingCartListItem;
