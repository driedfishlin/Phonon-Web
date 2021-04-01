/* 作為圖片跑馬燈的可重用元件（包含動畫速度設定值），需傳入具圖片網址的陣列（imgList）使用。如果不傳入該陣列，預設將產出白色色塊（可作為背景） */

import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

import { introPageCarouselImg } from '../../../dataTemplate';
const svgFilter = introPageCarouselImg.svgFilterBase64;

let initLoading = true;

//SECTION> CSS COMPONENT
const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
`;

const Box = styled.div`
	width: 63vw;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	overflow: hidden;
	${'' /* 輪播遮罩 */}
	mask-repeat: no-repeat;
	mask-position: 0 0px;
	mask-size: 180%;
	mask-image: url(${svgFilter});
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: 0 0px;
	-webkit-mask-size: 180%;
	-webkit-mask-image: url(${svgFilter});
`;

const ImgBackground = styled.div`
	background: white;
	position: absolute;
	transform: translate(-50%, -50%);
	top: 50%;
	left: 50%;
	width: 100%;
	height: 100%;
	animation-name: carouselAnimation;
`;

//SECTION> ClassName

// const fadeIn = css`
// 	opacity: 1;

// 	z-index: 10;
// 	transform: translate(-50%, -50%) scale(1.1);
// 	transition: transform 6s ease-out, opacity 2s;
// `;

// const fadeOut = css`
// 	opacity: 0;

// 	z-index: 5;
// 	transform: translate(-50%, -50%) scale(1);
// 	transition: transform 0s linear 2s, opacity 2s;
// `;

// 圖片完全顯示的時間
const durationOfAnimate = 4;
// 圖片切換的過度時長
const intervalOfAnimation = 1;
const totalAnimationTime = durationOfAnimate + intervalOfAnimation * 2;

//SECTION> CSS > Animation Keyframes

const carouselAnimation = keyframes`
    from{
		opacity: 0;
        transform: translate(-50%, -50%) scale(1.1);
    }
	15%{
		opacity: 1;
	}
	85%{
		opacity: 1;
	}
    to{
		opacity: 0;
		transform: translate(-50%, -50%) scale(1);
	}
`;
//TODO>
const Img = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;

	animation-name: ${carouselAnimation};
	animation-duration: ${totalAnimationTime}s;
	animation-timing-function: linear;
	animation-iteration-count: infinite;
	animation-play-state: pause;

	opacity: 0;
	transform: translate(-50%, -50%) scale(1.1);
`;

//TODO>

//SECTION> React Component
const ImgCarousel = ({ imgList }) => {
	const [carouselState, setCarouselState] = useState(0);

	const imgNodeList = useRef([]);

	useEffect(() => {
		// const YY = () => {
		// 	const C = document.querySelectorAll('.ggg');
		// 	const CI = C[1].querySelectorAll('img');
		// 	console.log(CI[0].style);
		// 	// const arr = [
		// 	// 	CI[0].style.animationPlayState,
		// 	// 	CI[1].style.animationPlayState,
		// 	// 	CI[2].style.animationPlayState,
		// 	// 	CI[3].style.animationPlayState,
		// 	// ];
		// 	// console.table(arr);
		// };
		// setInterval(YY, durationOfAnimate * 1000);

		initLoading = false;
		if (imgList) {
			// 監聽每張圖動畫結束一個週期即暫停
			imgNodeList.current.forEach(item => {
				item.addEventListener(
					'animationiteration',
					() => (item.style.animationPlayState = 'paused')
				);
			});

			setInterval(() => {
				setCarouselState(prev =>
					prev === imgList.length - 1 ? 0 : ++prev
				);
			}, durationOfAnimate * 1000);
		}
	}, []);

	useEffect(() => {
		// console.log('re render. STATE: ' + carouselState);
	});

	return (
		//FIXME>
		<Container className="ggg">
			{imgList ? (
				imgList.map((item, index) => (
					<Box key={index}>
						{console.log(carouselState)}
						{carouselState === index ? (
							<Img
								src={item}
								ref={el => (imgNodeList.current[index] = el)}
								style={{
									animationPlayState: 'running',
								}}
							/>
						) : (
							<Img
								src={item}
								ref={el => (imgNodeList.current[index] = el)}
								style={
									initLoading
										? {
												animationPlayState: 'paused',
												animationDelay: '100s',
										  }
										: null
								}
							/>
						)}
					</Box>
				))
			) : (
				<Box>
					<ImgBackground />
				</Box>
			)}
		</Container>
	);
};

export default ImgCarousel;
