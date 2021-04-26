/*
商品頁中，顯示商品卡片的區塊。
*/

import styled from '@emotion/styled';

import Card from './component/Card';
import { commoditiesList } from '../../dataTemplate';

import { useContext } from 'react';
import { pageStateContext } from './../../App';

//SECTION>

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

//SECTION>

const CommoditiesBlock = () => {
	const context = useContext(pageStateContext);
	const list = commoditiesList[context.commoditiesState.type];
	const filteredList =
		context.commoditiesState.filter === 'all'
			? list
			: list.filter(item => {
					return item.kind.includes(context.commoditiesState.filter);
			  });
	// 針對預約練習室頁面回傳畫面
	if (context.commoditiesState.type === 'room') {
		return (
			<Container>
				{filteredList.map(item => (
					<Card
						key={item.name}
						title={item.name}
						subTitle={item.kind[0]}
						price={item.price}
						img={item.pic}
						text={item.description}
						equipment={item.equipment}
						icon={item.numOfUser}
						type={'room'}
					/>
				))}
			</Container>
		);
	}
	// 針對預約餐點頁面回傳畫面
	if (context.commoditiesState.type === 'food')
		return (
			<Container>
				{filteredList.map(item => (
					<Card
						key={item.name}
						subTitle={item.name}
						price={item.price}
						img={item.pic}
						text={item.description}
						icon={item.kind}
						type={'food'}
					/>
				))}
			</Container>
		);
};

export default CommoditiesBlock;
