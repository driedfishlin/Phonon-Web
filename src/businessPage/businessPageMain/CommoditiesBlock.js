import styled from '@emotion/styled';

import Card from './component/Card';
import { commoditiesList } from '../../dataTemplate';

import { useContext } from 'react';
import { pageStateContext } from './../../App';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const CommoditiesBlock = () => {
	const context = useContext(pageStateContext);
	// console.log(context);
	const list = commoditiesList[context.commoditiesState.type];
	// console.log(list);
	// 針對當前環境指定的條件顯示產品卡片
	const filteredList =
		context.commoditiesState.filter === 'all'
			? list
			: list.filter(item => {
					return item.kind.includes(context.commoditiesState.filter);
			  });
	// console.log(filteredList);

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
					/>
				))}
			</Container>
		);
};

export default CommoditiesBlock;
