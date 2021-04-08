import React from 'react';
import styled from '@emotion/styled';

import RoomSectionContent from './RoomSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';

import { ReactComponent as ImgSVG } from '../../image/background/player_01.svg';

import { introPagePhononSectionCarouselImg } from '../../dataTemplate';
const imgList = introPagePhononSectionCarouselImg.imgs;

const Container = styled.div`
	width: 1280px;
	height: 100%;
	margin: 0 auto;
`;

const Background = styled.div`
	height: 100vh;
	width: 100vw;
	position: absolute;
	top: 0;
	left: 0;
	opacity: 0.2;
	& > svg {
		position: absolute;
		top: 5%;
		left: 0;
		& path,
		& line,
		& polygon {
			stroke: none;
		}
	}
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

const RoomSectionMain = ({ clickFn }) => {
	return (
		<Container>
			<Background>
				<ImgSVG />
			</Background>
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
			<RoomSectionContent clickFn={clickFn} />
		</Container>
	);
};

export default RoomSectionMain;
