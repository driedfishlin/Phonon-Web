import styled from '@emotion/styled';

import Card from './component/Card';

const Container = styled.div`
	// max-width: 100px;
	display: inline-block;
	vertical-align: top;
`;

const CommoditiesBlock = () => {
	return (
		<Container>
			<Card />
		</Container>
	);
};

export default CommoditiesBlock;
