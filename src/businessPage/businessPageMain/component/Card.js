import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { shoppingCartContext } from '../BusinessPageMain';

// SVG file for ROOM CARD
import { ReactComponent as OnePerson } from '../../../image/icon/user-solid.svg';
import { ReactComponent as TwoPerson } from '../../../image/icon/user-friends-solid.svg';
import { ReactComponent as ThreePerson } from '../../../image/icon/users-solid.svg';

// SVG file for FOOD CARD
import { ReactComponent as DrinkSVG } from '../../../image/icon/coffee-solid.svg';
import { ReactComponent as BreadSVG } from '../../../image/icon/bread-slice-solid.svg';
import { ReactComponent as PuddingSVG } from '../../../image/icon/pudding.svg';
import { ReactComponent as CakeSVG } from '../../../image/icon/cheese-solid.svg';

//SECTION>

const Container = styled.div`
	position: relative;
	width: 450px;
	height: 320px;
	border-radius: 20px;
	overflow: hidden;
	margin: 30px 0 30px 30px;
	display: flex;
	box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.1);
	background: #fff;
	&:hover {
		& > .card_text_block {
			width: 60%;
			& > .card_text_title_block {
				& > h3 {
					position: relative;
					font-size: 40px;
					text-align: left;
					padding: 0 20px;
					display: block;
					box-sizing: border-box;
					& > span {
						position: absolute;
						bottom: 8px;
						right: 35px;
						font-size: 15px;
						opacity: 1;
						transition: opacity 0.3s 0.3s;
					}
				}
			}
			& > .card_text_content_block {
				padding: 0 20px;
				justify-content: flex-start;
				& > .card_text_content_kind_block {
					width: 30px;
				}
				& > .card_text_content_detail_block {
					width: auto;
					opacity: 1;
					box-sizing: border-box;
					padding: 0 15px;
					transition: opacity 0.3s 0.3s;
					& > div {
						position: relative;
						top: -3px;
					}
					& p {
						text-align: justify;
						font-size: 15px;
					}
				}
			}
		}
		& > .card_img_block {
			width: 40%;
		}
	}
`;

const ImgBlock = styled.div`
	z-index: 10;
	width: 80%;
	box-shadow: 5px 0 7px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	border-radius: 20px;
	transition: width 0.3s;
	& > img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}
`;

const TextBlock = styled.div`
	z-index: 5;
	width: 20%;
	position: absolute;
	top: 0;
	right: 0;
	height: 100%;
	background: #fff;
	box-sizing: border-box;
	padding: 40px 0;
	transition: width 0.3s;
`;

const TitleBlock = styled.div`
	white-space: nowrap;
	& > h3 {
		display: inline-block;
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-family: BlinkMacSystemFont, '微軟正黑體';
		transition: font-size 0.3s;
		height: 50px;
		& > span {
			opacity: 0;
			font-size: 0px;
			display: inline-block;
		}
	}
`;
const ContentBlock = styled.div`
	margin-top: 18px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
`;
const ContentKindBlock = styled.div`
	& > h4 {
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		font-size: 20px;
		writing-mode: vertical-lr;
		letter-spacing: 1px;
	}
`;

const ContentDetailBlock = styled.div`
	width: 0;
	opacity: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& p {
		margin-bottom: 7px;
	}
`;

const PersonIcon = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	& > svg {
		width: 20px;
		& path {
			fill: #000;
		}
	}
`;

const ReservationButton = styled.button`
	font-size: 18px;
	text-align: center;
	letter-spacing: 4px;
	margin: 0 auto;
	display: block;
	background-color: transparent;
	border-radius: 30px;
	box-sizing: border-box;
	padding: 7px 15px;
	padding-left: 19px;
	user-select: none;
	position: absolute;
	bottom: 30px;
	right: 35px;
	cursor: pointer;
	border: 2px solid #000;
	font-weight: 600;
	&:focus {
		outline: none;
	}
	&:hover {
		border: 2px solid #ac25a6;
		background-color: #ac25a6;
		color: white;
	}
`;

const activeCardClass = css`
	& > .card_text_block {
		width: 60%;
		& > .card_text_title_block {
			& > h3 {
				position: relative;
				font-size: 40px;
				text-align: left;
				padding: 0 20px;
				display: block;
				box-sizing: border-box;
				& > span {
					position: absolute;
					bottom: 8px;
					right: 35px;
					font-size: 15px;
					opacity: 1;
					transition: opacity 0.3s 0.3s;
				}
			}
		}
		& > .card_text_content_block {
			padding: 0 20px;
			justify-content: flex-start;
			& > .card_text_content_kind_block {
				width: 30px;
			}
			& > .card_text_content_detail_block {
				width: auto;
				opacity: 1;
				box-sizing: border-box;
				padding: 0 15px;
				transition: opacity 0.3s 0.3s;
				& > div {
					position: relative;
					top: -3px;
				}
				& p {
					text-align: justify;
					font-size: 15px;
				}
				& button {
					border: 2px solid #ac25a6;
					background-color: #ac25a6;
					color: white;
				}
			}
		}
	}
	& > .card_img_block {
		width: 40%;
	}
`;

//SECTION>

const Card = ({ title, subTitle, price, img, text, equipment, icon, type }) => {
	const context = useContext(shoppingCartContext);
	const state = context.shoppingCartState;
	const setState = context.setShoppingCartState;

	console.log(state);

	const name = title || subTitle;
	const isCartActive = state[type].some(item => item.name === name);

	// add / remove 商品至 state
	const onButtonClick = () => {
		// const name = title || subTitle;
		setState(prev => {
			const newState = {
				...prev,
			};
			// 如果該商品已存在，從清單中剔除
			const newList = prev[type].filter(item => {
				if (item.name === name) return false;
				return true;
			});
			// 剔除商品
			if (prev[type].length > newList.length) {
				newState[type] = newList;
				return newState;
			}
			// 增加商品
			if (prev[type].length === newList.length) {
				newState[type] = [...newList, { name, price }];
				return newState;
			}
			return prev;
		});
	};

	return (
		<Container className={isCartActive && activeCardClass}>
			<TextBlock className="card_text_block">
				<TitleBlock className="card_text_title_block">
					<h3>
						{title}
						<span>NT {price} / hour</span>
					</h3>
				</TitleBlock>
				<ContentBlock className="card_text_content_block">
					<ContentKindBlock className="card_text_content_kind_block">
						<h4>{subTitle}</h4>
						<PersonIcon>
							{(() => {
								// for ROOM
								if (icon === 1) return <OnePerson />;
								if (icon === 2) return <TwoPerson />;
								if (icon === 3) return <ThreePerson />;
								// for FOOD
								if (icon === '糕點') return <CakeSVG />;
								if (icon === '布丁') return <PuddingSVG />;
								if (icon === '麵包') return <BreadSVG />;
								if (icon === '飲品') return <DrinkSVG />;
							})()}
						</PersonIcon>
					</ContentKindBlock>
					<ContentDetailBlock className="card_text_content_detail_block">
						<div>
							{equipment ? (
								<p>設備：{equipment.join('、')}</p>
							) : (
								''
							)}
							<p>{text}</p>
						</div>
						<ReservationButton onClick={onButtonClick}>
							{(() => {
								if (type === 'room') return '預約';
								if (type === 'food') return '訂製';
								return;
							})()}
						</ReservationButton>
					</ContentDetailBlock>
				</ContentBlock>
			</TextBlock>
			<ImgBlock className="card_img_block">
				<img src={img} alt="照片" />
			</ImgBlock>
		</Container>
	);
};

export default Card;
