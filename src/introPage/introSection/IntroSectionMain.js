import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as FilterSVG } from '../../image/filter/filter_01.svg';
// Component
import IntroSectionContent from './IntroSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';
// Data Template
import { introPageCarouselImg } from '../../dataTemplate';
const imgList = introPageCarouselImg.introSection;

//SECTION> CSS COMPONENT
const Container = styled.div`
	position: relative;
	height: 100%;
	margin: 0 auto;
`;
const Filter = styled(FilterSVG)`
	width: 1400px;
	position: absolute;
	top: 20px;
	left: 500px;
	transform: rotate(-13deg);
	& > path {
		fill: rgba(225, 225, 225, 0.5);
	}
`;

const IntroSectionMain = () => {
	return (
		<Container>
			<IntroSectionContent />
			<ImgCarousel imgList={imgList} />
			{/* <Filter></Filter> */}
		</Container>
	);
};

export default IntroSectionMain;
