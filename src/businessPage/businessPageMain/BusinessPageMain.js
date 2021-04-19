import React, { createContext, useState } from 'react';
import styled from '@emotion/styled';

import CommoditiesBlock from './CommoditiesBlock';
import BusinessPageSideBar from './BusinessPageSideBar';
import SelectDateBlock from './component/SelectDateBlock';

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
	const [shoppingCartState, setShoppingCartState] = useState({
		room: [],
		food: [],
	});
	const contextValue = { shoppingCartState, setShoppingCartState };
	// console.log(shoppingCartState);
	return (
		<Container>
			<shoppingCartContext.Provider value={contextValue}>
				<SelectDateBlock />
				<ContentContainer>
					<BusinessPageSideBar></BusinessPageSideBar>
					<CommoditiesBlock></CommoditiesBlock>
				</ContentContainer>
			</shoppingCartContext.Provider>
		</Container>
	);
};

export default BusinessPageMain;
