import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as arrow } from '../../../image/icon/arrow-circle-left-solid.svg';

//SECTION> DATA Template
// 商品分類表
const commoditiesInfo = {
	food: [
		//UNDONE> 圖片網址未補完
		{
			nameTc: '飲品',
			nameEng: 'Drink',
			imgUrl:
				'./img/_Temporary_pic/food/maddi-bazzocco-5o4WVPa0qGQ-unsplash.jpg',
		},
		{
			nameTc: '糕點',
			nameEng: 'Cake',
			imgUrl:
				'./img/_Temporary_pic/food/corleto-peanut-butter-g0NcZr1eYbI-unsplash.jpg',
		},
		{
			nameTc: '布丁',
			nameEng: 'Pudding',
			imgUrl:
				'./img/_Temporary_pic/food/priyanka-singh-sZCcZFQ9Hrc-unsplash.jpg',
		},
		{
			nameTc: '餅乾',
			nameEng: 'Cookies',
			imgUrl: './img/_Temporary_pic/food/mae-mu-ppOPjqAJ3Mw-unsplash.jpg',
		},
	],
	room: [
		{
			nameTc: '個人琴房',
			nameEng: 'Personal Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/kara-eads-L7EwHkq1B2s-unsplash.jpg',
		},
		{
			nameTc: '室內樂琴房',
			nameEng: 'Chamber Music Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/kari-shea-tOVmshavtoo-unsplash.jpg',
		},
		{
			nameTc: '團練室',
			nameEng: 'Group Practice Room',
			imgUrl:
				'./img/_Temporary_pic/room/michael-oxendine-GHCVUtBECuY-unsplash.jpg',
		},
		{
			nameTc: '演奏廳',
			nameEng: 'Concert Hall',
			imgUrl:
				'./img/_Temporary_pic/room/roberto-nickson-rEJxpBskj3Q-unsplash.jpg',
		},
	],
};

//SECTION> CSS Component
const Container = styled.div`
	display: flex;
	height: 100%;
`;
// 頁面區塊，每一塊為一種產品分類
const Item = styled.div`
	flex: 1 0 5%;
	transition: flex 0.5s 0.1s;
	overflow: hidden;
	position: relative;
	cursor: pointer;
	&:hover {
		flex: 0 0 35%;
		& > a {
			opacity: 1;
			transition: opacity 0.7s, width 1.2s 0.2s;
			width: 85px;
			& > h6,
			& > p {
				transform: translateY(0px);
				opacity: 1;
			}
			& > h6 {
				transition: opacity 0.8s 0.1s, transform 1s 0.1s;
			}
			& > p {
				transition: opacity 0.8s 0.6s, transform 1s 0.6s;
			}
		}
	}
`;
const CommodityName = styled.a`
	color: white;
	text-decoration: none;
	writing-mode: vertical-rl;
	position: absolute;
	right: 20%;
	bottom: 10%;
	opacity: 0;
	transition: opacity 0.2s, width 0s 0.2s;
	border-top: solid 7px white;
	width: 0px;
	padding-top: 28px;
	font-family: 'Noto Serif TC', serif;
`;
const CommodityNameTc = styled.h6`
	font-size: 55px;
	letter-spacing: 8px;
	line-height: 50px;
	font-weight: 600;
	transform: translateY(-20px);
	transition: transform 0s 0.2s;
	opacity: 1;
	user-select: none;
`;
const CommodityNameEng = styled.p`
	font-family: 'Noto Serif TC', serif;
	font-size: 20px;
	font-weight: 300;
	position: relative;
	left: -13px;
	top: 6px;
	letter-spacing: 2px;
	line-height: 25px;
	transform: translateY(-10px);
	transition: opacity 0.2s, transform 0s 0.2s;
	opacity: 0;
	user-select: none;
`;
const CommodityImg = styled.img`
	height: 110%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	filter: brightness(1);
	transition: filter 0.1s;
	&:hover {
		filter: brightness(0.6);
	}
`;
// 「回前頁」按鈕
const BackButton = styled.a`
	position: absolute;
	top: 30px;
	left: 40px;
	color: white;
	font-size: 25px;
	white-space: nowrap;
	text-decoration: none;
	cursor: pointer;
	& > p {
		user-select: none;
		transition: opacity 0.5s;
		filter: drop-shadow(0px 0px 7px rgba(0, 0, 0, 0.8));
		line-height: 40px;
		font-weight: 600;
		visibility: hidden;
		opacity: 0;
		font-family: 'Noto Serif TC', serif;
		position: absolute;
		left: 45px;
		top: 1px;
		font-size: 20px;
		letter-spacing: 2px;
		color: white;
	}
	&:hover {
		& > p {
			visibility: visible;
			left: 60px;
			opacity: 1;
			transition: opacity 0.6s 0.2s, left 0.6s 0.2s;
		}
		& > svg {
			filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.3));
			transform: scale(1.1) rotate(180deg);
			transition: transform 0.5s;
		}
	}
`;

//SECTION> Callback Function
const showInfoToggle = state => {
	switch (state) {
		case '琴房預約':
			return commoditiesInfo.room.map((item, index) => (
				<ItemTemplate
					nameTc={item.nameTc}
					nameEng={item.nameEng}
					img={item.imgUrl}
					key={index}
				/>
			));
		case '餐點訂製':
			return commoditiesInfo.food.map((item, index) => (
				<ItemTemplate
					nameTc={item.nameTc}
					nameEng={item.nameEng}
					img={item.imgUrl}
					key={index}
				/>
			));
		default:
			return null;
	}
};

//SECTION> React Component

const ItemTemplate = ({ nameTc, nameEng, img }) => {
	return (
		<Item>
			<CommodityImg src={img} />
			<CommodityName>
				<CommodityNameTc>{nameTc}</CommodityNameTc>
				<CommodityNameEng>{nameEng}</CommodityNameEng>
			</CommodityName>
		</Item>
	);
};

const CommoditiesGroup = ({ clickState, clickFn, arrowEl }) => {
	const Arrow = styled(arrow)`
		position: relative;
		top: 0;
		left: 0;
		width: 40px;
		height: 40px;
		color: white;
		transform: scale(1) rotate(0deg);
		transition: transform 1s ${clickState.arrowDelay ? '1.5s' : ''};
	`;
	return (
		<Container>
			{/* 依照點擊的按鈕決定是顯示哪種類的產品列表 */}
			{showInfoToggle(clickState.target)}

			<BackButton onClick={clickFn}>
				<Arrow
					comment="This icon comes from FONTAWESOME. https://fontawesome.com/"
					ref={arrowEl}
				/>
				<p>回前頁</p>
			</BackButton>
		</Container>
	);
};

export default CommoditiesGroup;
