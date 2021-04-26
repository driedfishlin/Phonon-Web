/*
商品頁主頁面。
*/

import styled from '@emotion/styled';
import BusinessPageHeader from './businessPageHeader/BusinessPageHeader';
import BusinessPageMain from './businessPageMain/BusinessPageMain';
import Footer from '../introPage/footerSection/Footer';

const Container = styled.div`
	min-height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BusinessPage = () => {
	return (
		<Container>
			<BusinessPageHeader />
			<BusinessPageMain />
			<Footer bgc={'#4C2556'} height={'200px'} flexBottom />
		</Container>
	);
};

export default BusinessPage;
