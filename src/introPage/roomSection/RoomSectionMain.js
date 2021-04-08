import React from 'react';
import styled from '@emotion/styled';

import RoomSectionContent from './RoomSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';

import { introPagePhononSectionCarouselImg } from '../../dataTemplate';
const imgList = introPagePhononSectionCarouselImg.imgs;

const Container = styled.div`
	width: 1280px;
	height: 100%;
	margin: 0 auto;
`;

const carouselPosition = {
	top: '0px',
	left: '5vw',
	width: '50vw',
	height: '100vh',
};

const filter = {
	src: introPagePhononSectionCarouselImg.svgFilterBase64,
	size: '100%',
	position: '10% 58%',
};

const RoomSectionMain = () => {
	return (
		<Container>
			<ImgCarousel
				filter={{ ...filter, position: '10% 58%' }}
				backgroundStyle={{
					scale: 1.08,
					rotate: -3,
					opacity: 0.3,
				}}
				position={carouselPosition}
			/>
			<ImgCarousel filter={filter} position={carouselPosition} />
			<ImgCarousel
				filter={filter}
				imgList={imgList}
				position={carouselPosition}
			/>
			<RoomSectionContent />
		</Container>
	);
};

export default RoomSectionMain;
