/*
商品頁主要內容區塊
*/

import React, { createContext, useState, useContext, useEffect } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../../App';

import CommoditiesBlock from './CommoditiesBlock';
import BusinessPageSideBar from './BusinessPageSideBar';
import SelectDateBlock from './component/SelectDateBlock';
import ShoppingCartBoard from './ShoppingCartBoard';

//SECTION>

const Container = styled.div`
	width: 100%;
	max-width: 1280px;
	margin: 0 auto;
	margin-bottom: 50px;
	box-sizing: border-box;
	flex: 1;
`;

const ContentContainer = styled.div`
	display: flex;
	padding-right: 30px;
	box-sizing: border-box;
	@media (max-width: 767px) {
		flex-direction: column;
	}
`;

//SECTION>

export const shoppingCartContext = createContext(null);
// 從瀏覽器取回先前儲存使用者加入購物車的商品清單
const oldData = JSON.parse(localStorage.getItem('phononWebShoppingCartList'));

//SECTION>

const BusinessPageMain = () => {
	//PART>
	// 購物車頁面顯示狀態
	const [shoppingCartPageState, setShoppingCartPageState] = useState(false);
	// 購物車清單內容
	const [shoppingCartState, setShoppingCartState] = useState(
		oldData || {
			room: [],
			food: [],
		}
	);

	//PART> // 設定 localStorage 機制，儲存購物車清單
	useEffect(() => {
		const onWindowUnload = event => {
			event.preventDefault();
			localStorage.setItem(
				'phononWebShoppingCartList',
				JSON.stringify(shoppingCartState)
			);
		};
		window.addEventListener('unload', onWindowUnload);
		return () => window.removeEventListener('unload', onWindowUnload);
	}, [shoppingCartState]);

	//PART>
	const contextValue = { shoppingCartState, setShoppingCartState };
	const context = useContext(pageStateContext);
	//PART>
	const toggleShoppingCartPage = event => {
		event.preventDefault();
		if (shoppingCartPageState === false) {
			document.documentElement.style.overflowY = 'hidden';
			context.message.setState(prev => ({ ...prev, show: false }));
		} else {
			document.documentElement.style.overflowY = 'auto';
		}
		setShoppingCartPageState(prev => !prev);
	};
	//PART>
	return (
		<Container>
			<shoppingCartContext.Provider value={contextValue}>
				<SelectDateBlock togglePageFn={toggleShoppingCartPage} />
				<ContentContainer>
					<BusinessPageSideBar></BusinessPageSideBar>
					<CommoditiesBlock></CommoditiesBlock>
				</ContentContainer>
				{shoppingCartPageState && (
					<ShoppingCartBoard togglePageFn={toggleShoppingCartPage} />
				)}
			</shoppingCartContext.Provider>
		</Container>
	);
};

export default BusinessPageMain;
