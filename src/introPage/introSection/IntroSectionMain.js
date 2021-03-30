import React from 'react';
import styled from '@emotion/styled';

import { ReactComponent as FilterSVG } from '../../image/filter/filter_01.svg';

//PART> COMPONENT
import IntroSectionContent from './IntroSectionContent';

//PART> CSS COMPONENT
const Container = styled.div`
	position: relative;
	width: 1024px;
	height: 100%;
	margin: 0 auto;
	padding-top: 170px;
`;
const Filter = styled(FilterSVG)`
	width: 1400px;
	position: absolute;
	top: 20px;
	left: 400px;
	transform: rotate(-13deg);
`;

const IntroSectionMain = () => {
	return (
		<Container>
			<IntroSectionContent />
			<Filter></Filter>
		</Container>
	);
};

export default IntroSectionMain;
