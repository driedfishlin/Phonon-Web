import styled from '@emotion/styled';

// const listHeight = '60px';

const Container = styled.div`
	height: 60px;
	// width: ;
	position: relative;
	border-top: 1px solid #999;
	border-bottom: 3px solid #000;
`;

const Anchor = styled.a`
	font-size: 17px;
	display: inline-block;
	height: 60px;
	line-height: 60px;
	text-decoration: none;
	color: black;
	padding: 0 20px;
	letter-spacing: 3px;
	font-weight: 600;
`;

const UnOrderedLists = styled.ul`
	// position: absolute;
	top: 0;
	left: 0;
	display: flex;
	& > li {
		position: relative;
		& > div {
			height: 3px;
			position: absolute;
			width: 1px;
			left: 50%;
			bottom: -3px;
            transform: translateX(-50%);
			background-color: #66aaff;
            transition: width 0.3s, opacity 0s 0.3s;
            opacity: 0;
		}
	}
	&> li:hover > div {
        transition: width 0.3s, opacity 0s;
        opacity:1;
        width: 100%;
		}
	}
`;

const List = ({ text }) => {
	return (
		<li>
			<Anchor href={'#'}>{text}</Anchor>
			<div />
		</li>
	);
};

const BusinessPageNavBar = () => {
	return (
		<Container>
			<UnOrderedLists>
				<List text={'首頁'} onClick={null}></List>
				<List text={'琴房預約'} onClick={null}></List>
				<List text={'餐點訂製'} onClick={null}></List>
			</UnOrderedLists>
		</Container>
	);
};
export default BusinessPageNavBar;
