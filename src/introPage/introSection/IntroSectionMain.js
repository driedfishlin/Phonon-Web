import React from 'react';
import styled from '@emotion/styled';
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

const IntroSectionMain = () => {
	return (
		<Container>
			<IntroSectionContent />
			<ImgCarousel
				backgroundStyle={{
					scale: 1.05,
					rotate: -8,
					opacity: 0.5,
				}}
			/>
			<ImgCarousel />
			<ImgCarousel imgList={imgList} />
		</Container>
	);
};

export default IntroSectionMain;
