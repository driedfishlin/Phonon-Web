import styled from '@emotion/styled';

import CommoditiesBlock from './CommoditiesBlock';
import BusinessPageSideBar from './BusinessPageSideBar';

import { ReactComponent as ClipBroad } from '../../image/icon/clipboard-regular.svg';

const Container = styled.div`
	width: 1280px;
	margin: 0 auto;
	// padding: 30px;
	box-sizing: border-box;
	// display: flex;
	// align-items: flex-start;
`;

const SelectDateBlock = styled.form`
	padding: 30px;
	padding-top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	& > label {
		font-size: 20px;
		padding-right: 15px;
	}
	& > input {
		height: 30px;
		font-size: 18px;
		border-radius: 25px;
		margin-right: 25px;
		padding: 5px 13px;
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

const BusinessPageMain = () => {
	return (
		<Container>
			<SelectDateBlock>
				<label>預約日期</label>
				<input type="date" />
				<label>人數</label>
				<input type="number" />
				<ClipBroadContainer>
					<div>
						<ClipBroad />
					</div>
				</ClipBroadContainer>
			</SelectDateBlock>
			<BusinessPageSideBar></BusinessPageSideBar>
			<CommoditiesBlock></CommoditiesBlock>
		</Container>
	);
};

export default BusinessPageMain;
