import React from 'react';
import styled from '@emotion/styled';
// Component
import IntroSectionContent from './IntroSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';
import ScrollPromptText from '../component/shared/ScrollPromptText';
// Data Template
import { introPageCarouselImg } from '../../dataTemplate';
const imgList = introPageCarouselImg.introSection;

//SECTION> CSS COMPONENT
const Container = styled.div`
	position: relative;
	height: 100%;
	margin: 0 auto;
`;

const IntroSectionMain = () => {
	return (
		<Container>
			<ImgCarousel
				backgroundStyle={{
					scale: 1.05,
					rotate: -8,
					opacity: 0.5,
				}}
			/>
			<ImgCarousel />
			<ImgCarousel imgList={imgList} />
			<IntroSectionContent />
			<ScrollPromptText />
		</Container>
	);
};

export default IntroSectionMain;
