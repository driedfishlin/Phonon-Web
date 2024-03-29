/*
入口頁第三頁
*/

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

import RoomSectionContent from './RoomSectionContent';
import ImgCarousel from '../component/carousel/ImgCarousel';
import ScrollPromptText from '../component/shared/ScrollPromptText';

import { ReactComponent as ImgSVG } from '../../image/background/player_01.svg';

import { introPageRoomSectionCarouselImg } from '../../dataTemplate';
const imgList = introPageRoomSectionCarouselImg.imgs;

//SECTION>

const Container = styled.div`
	width: 1280px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	align-items: flex-end;
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

//SECTION>

const carouselPosition = {
	top: '0px',
	left: '5vw',
	width: '50vw',
	height: '100vh',
};

const filter = {
	src: introPageRoomSectionCarouselImg.svgFilterBase64,
	size: '100%',
	position: '10% 58%',
};

//SECTION>

const RoomSectionMain = () => {
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
				color={'white'}
				rwdOption={css`
					@media (max-width: 1024px) {
						opacity: 0.3;
					}
				`}
			/>
			<ImgCarousel
				filter={filter}
				imgList={imgList}
				position={carouselPosition}
				pagePosition={3}
				rwdOption={css`
					@media (max-width: 1024px) {
						opacity: 0.5;
					}
				`}
			/>
			<RoomSectionContent />
			<ScrollPromptText
				color={'white'}
				propClass={css`
					@media (max-width: 375px) {
						display: none !important;
					}
				`}
			/>
		</Container>
	);
};

export default RoomSectionMain;
