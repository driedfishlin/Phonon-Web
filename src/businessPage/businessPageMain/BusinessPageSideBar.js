import styled from '@emotion/styled';

const Container = styled.div`
	padding: 30px;
	width: 260px;
	box-sizing: border-box;
	display: inline-block;
`;

const CommoditiesKind = styled.p`
	font-size: 20px;
	font-weight: 600;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	padding-bottom: 20px;
	margin-bottom: 20px;
	letter-spacing: 1px;
`;

const UnOrderLists = styled.ul`
	& > li {
		height: 45px;
		& > a {
			letter-spacing: 1px;
			font-size: 18px;
			line-height: 45px;
			display: block;
			text-decoration: none;
			color: black;
		}
	}
`;

const ListItem = ({ text }) => {
	return (
		<li>
			<a>{text}</a>
		</li>
	);
};

const BusinessPageSideBar = () => {
	return (
		<Container>
			<CommoditiesKind>琴房預約</CommoditiesKind>
			<UnOrderLists>
				<ListItem text="獨立練習室" />
				<ListItem text="室內樂練習室" />
				<ListItem text="團體練習室" />
				<ListItem text="演奏廳" />
			</UnOrderLists>
		</Container>
	);
};

export default BusinessPageSideBar;
