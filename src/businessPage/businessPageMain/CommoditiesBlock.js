import styled from '@emotion/styled';

import Card from './component/Card';

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const CommoditiesBlock = () => {
	return (
		<Container>
			<Card />
			<Card />
			<Card />
			<Card />
		</Container>
	);
};

export default CommoditiesBlock;
