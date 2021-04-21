import React, { createContext, useState, useContext } from 'react';
import styled from '@emotion/styled';

import { pageStateContext } from '../../App';

import CommoditiesBlock from './CommoditiesBlock';
import BusinessPageSideBar from './BusinessPageSideBar';
import SelectDateBlock from './component/SelectDateBlock';
import ShoppingCartBoard from './ShoppingCartBoard';

const Container = styled.div`
	width: 1280px;
	margin: 0 auto;
	margin-bottom: 50px;
	box-sizing: border-box;
`;

const ContentContainer = styled.div`
	display: flex;
	padding-right: 30px;
	box-sizing: border-box;
`;

export const shoppingCartContext = createContext(null);

const BusinessPageMain = () => {
	//PART>
	// 購物車頁面顯示狀態
	const [shoppingCartPageState, setShoppingCartPageState] = useState(false);
	// 購物車清單內容
	const [shoppingCartState, setShoppingCartState] = useState({
		room: [],
		food: [],
	});
	//PART>
	const contextValue = { shoppingCartState, setShoppingCartState };
	const context = useContext(pageStateContext);
	//PART>
	const toggleShoppingCartPage = event => {
		event.preventDefault();
		if (shoppingCartPageState === false)
			context.message.setState(prev => ({ ...prev, show: false }));
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
