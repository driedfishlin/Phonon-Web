import React from 'react';
import styled from '@emotion/styled';
import BusinessPageHeader from './businessPageHeader/BusinessPageHeader';
import BusinessPageMain from './businessPageMain/BusinessPageMain';
import Footer from '../introPage/footerSection/Footer';

const Container = styled.div`
	* {
		outline: 1px solid #555;
	}
`;

const BusinessPage = () => {
	return (
		<Container>
			<BusinessPageHeader />
			<BusinessPageMain />
			<Footer bgc={'#4C2556'} height={'200px'} />
		</Container>
	);
};

export default BusinessPage;
