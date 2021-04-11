import styled from '@emotion/styled';

import { ReactComponent as ClipBroad } from '../../../image/icon/clipboard-regular.svg';

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
		&:focus {
			outline: none;
		}
	}
`;

const ClipBroadContainer = styled.div`
	flex: auto;
	& > div {
		float: right;
		cursor: pointer;
	}
	& svg {
		width: 27px;
	}
`;

const SelectDateBlock = () => {
	return (
		<Container>
			<label htmlFor="reservation_date">預約日期</label>
			<input type="date" id="reservation_date" />
			<label htmlFor="reservation_time">時間</label>
			<input type="time" id="reservation_time" />
			<label htmlFor="numOfUsers">人數</label>
			<select>
				<option value={null}>請選擇人數</option>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
				<option value={5}>5</option>
				<option value={'else'}>其他</option>
			</select>
			<ClipBroadContainer>
				<div>
					<ClipBroad />
				</div>
			</ClipBroadContainer>
		</Container>
	);
};

export default SelectDateBlock;
