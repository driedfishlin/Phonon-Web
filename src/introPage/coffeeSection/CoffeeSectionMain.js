import React from 'react';
import styled from '@emotion/styled';

import ImgCarousel from '../component/carousel/ImgCarousel';
import CoffeeSectionContent from './CoffeeSectionContent';

import { introPageCoffeeSectionCarouselImg as data } from '../../dataTemplate';

const Container = styled.div`
	height: 100%;
	width: 1280px;
	margin: 0 auto;
`;

const Background = styled.div`
	height: 100vw;
	width: 100vw;
	position: absolute;
	top: -25%;
	left: -5%;
	background-image: url('./img/background/coffee.svg');
	background-repeat: repeat;
	background-size: 30%;
	opacity: 0.1;
	transform: rotate(20deg);
`;

const CarouselContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
`;

const carouselPosition = {
	top: '0',
	right: '-5%',
	width: '60vw',
	height: '90vh',
};

const filter = {
	src: data.svgFilterBase64,
	size: '100%',
	position: '10% 58%',
};

const CoffeeSectionMain = ({ clickFn }) => {
	return (
		<Container>
			<Background />
			<CarouselContainer>
				<ImgCarousel
					filter={{ ...filter, position: '10% 58%' }}
					backgroundStyle={{
						scale: 1.08,
						rotate: -3,
						opacity: 0.5,
					}}
					position={carouselPosition}
					color={'white'}
				/>
				{/* <ImgCarousel filter={filter} position={carouselPosition} /> */}
				<ImgCarousel
					filter={filter}
					imgList={data.imgs}
					position={carouselPosition}
					pagePosition={4}
				/>
			</CarouselContainer>
			<CoffeeSectionContent clickFn={clickFn} />
		</Container>
	);
};

export default CoffeeSectionMain;
