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

const BusinessPageMain = () => {
	return (
		<Container>
			<SelectDateBlock />
			<ContentContainer>
				<BusinessPageSideBar></BusinessPageSideBar>
				<CommoditiesBlock></CommoditiesBlock>
			</ContentContainer>
		</Container>
	);
};

export default BusinessPageMain;
