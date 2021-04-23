import React from 'react';
import styled from '@emotion/styled';
// Component
import IntroSectionContent from './IntroSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';
import ScrollPromptText from '../component/shared/ScrollPromptText';
import pngFile from '../../image/background/ins.png';
// Data Template
import { introPageIntroSectionCarouselImg } from '../../dataTemplate';
const imgList = introPageIntroSectionCarouselImg.introSection;

//SECTION> CSS COMPONENT
const Container = styled.div`
	position: relative;
	height: 100%;
	margin: 0 auto;
`;

const Background = styled.div`
	width: 100%;
	height: 100%;
	& > img {
		height: 120%;
		opacity: 0.2;
		position: relative;
		top: -100px;
	}
`;

//SECTION>
const carouselPosition = {
	top: '50px',
	left: '40vw',
	width: '100vw',
	height: '100vh',
};

const IntroSectionMain = ({ pageState }) => {
	return (
		<Container>
			<Background>
				<img src={pngFile} alt="background" />
			</Background>
			{/* <ImgCarousel
				backgroundStyle={{
					scale: 1.05,
					rotate: -8,
					opacity: 0.5,
				}}
				position={carouselPosition}
			/> */}
			<ImgCarousel
				position={carouselPosition}
				backgroundStyle={{
					opacity: 0.8,
				}}
			/>
			<ImgCarousel
				imgList={imgList}
				position={carouselPosition}
				pagePosition={1}
				pageState={pageState}
			/>
			<IntroSectionContent pageState={pageState} />
			<ScrollPromptText color={'black'} pageState={pageState} />
		</Container>
	);
};

export default IntroSectionMain;
