/*
	作為圖片跑馬燈的可重用元件，可傳入 position 物件設定位置及尺寸、 filter 物件控制形狀。
	作為輪播使用，需傳入具圖片網址的陣列（imgList）使用。
	如果不傳入該陣列，預設將產出靜態的黑色色塊。傳入 backgroundStyle 時該色塊將帶有動畫。

	1. imgList 存在 => imgList 僅有一張圖片 ? 建立靜態圖片 : 使用該資料建立輪播
	2. imgList 不存在 => 預設在原地建立底圖，可自訂 backgroundStyle 樣式、
		color 指定顏色、或帶 animation 屬性套用動畫

	・ backgroundStyle 所接受的參數 { opacity, rotate, scale }
	・ position 所接受的參數 { width, height, top, left }
	・ filter 所接受的參數 { size, src, position }
*/

import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

import { introPageIntroSectionCarouselImg } from '../../../dataTemplate';
const svgFilter = introPageIntroSectionCarouselImg.svgFilterBase64;

//SECTION> CUSTOM DATA & STATE

// [自訂] 一張圖片動畫的週期（秒）
const totalAnimationTime = 4;

//SECTION> CSS COMPONENT
const Container = styled.div`
	width: 100vw;
`;

const Box = styled.div`
	position: absolute;

	${'' /* 尺寸、位置樣式寫在 render 處 */}

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	will-change: opacity;
	min-height: 100%;
	height: 100%;
	object-fit: contain;
	opacity: 1;
`;

const ImgBackground = styled.div`
	background: black;
	width: 100%;
	height: 100%;
`;

//SECTION> CSS > Animation Keyframes

// 圖片輪播動畫
const carouselAnimation = keyframes`
    from{
		opacity: 0;
    }
	15%{
		opacity: 1;
	}
    to{
		opacity: 1;
	}
`;

//SECTION> ClassName

const fadeIn = css`
	animation-name: ${carouselAnimation};
	animation-duration: ${totalAnimationTime}s;
	animation-timing-function: linear;
	animation-iteration-count: 1;
	animation-play-state: pause;
`;

// Style => 用於離開當前頁面時停止動畫以節省運算效能
const pauseAnimationStyle = { animationPlayState: 'paused' };

//SECTION> React Component
const ImgCarousel = ({
	imgList,
	backgroundStyle,
	filter,
	position,
	pageState,
	pagePosition,
	float,
	color,
	rwdOption,
}) => {
	// 當前輪播中的圖片索引數字
	const [carouselState, setCarouselState] = useState(0);
	// 取得 <img> 元素的參考
	const imgNodeList = useRef([]);
	// 圖片數量
	const imgCount = imgList?.length;

	//PART> CSS animation keyframes

	// 懸浮的動畫，套用在背景
	const floatKeyframes = keyframes(
		backgroundStyle && float
			? `from{
			transform: translateX(0) translateY(0) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		12%{
			transform: translateX(2px) translateY(-4px) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		25%{
			transform: translateX(4px) translateY(0) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		37%{
			transform: translateX(2px) translateY(4px) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		50%{
			transform: translateX(0) translateY(0) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		62%{
			transform: translateX(-2px) translateY(-4px) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		75%{
			transform: translateX(-4px) translateY(0) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		87%{
			transform: translateX(-2px) translateY(4px) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		to{
			transform: translateX(0) translateY(0) scale(${backgroundStyle.scale}) rotate(${backgroundStyle.rotate}deg);
		}
		`
			: null
	);

	//PART> ClassName
	const backgroundClass = css({
		animationName: floatKeyframes,
		animationDuration: '5s',
		animationTimingFunction: 'linear',
		animationIterationCount: 'infinite',
		transform: `scale(${
			backgroundStyle ? backgroundStyle.scale || 1 : 1
		}) rotate(${backgroundStyle ? backgroundStyle.rotate || 0 : 0}deg)`,
		opacity: backgroundStyle ? backgroundStyle.opacity || 1 : 1,
	});

	// 如果 filter 不存在即給予空物件，避免 filterClass 出錯
	filter = filter ? filter : {};

	// 輪播遮罩
	const filterClass = css`
		mask-repeat: no-repeat;
		mask-position: ${filter.position || 'center'};
		mask-size: ${filter.size || '100%'};
		mask-image: url(${filter.src || svgFilter});
		-webkit-mask-repeat: no-repeat;
		-webkit-mask-position: ${filter.position || 'center'};
		-webkit-mask-size: ${filter.size || '100%'};
		-webkit-mask-image: url(${filter.src || svgFilter});
	`;
	//PART>
	useEffect(() => {
		if (imgList) {
			imgNodeList.current.forEach(item => {
				item.addEventListener(
					'animationend', // 每當動畫結束時觸發，呼叫下一張圖片
					() => {
						setCarouselState(prev =>
							prev === imgList.length - 1 ? 0 : ++prev
						);
						item.classList.remove(fadeIn);
					}
				);
			});
		}
	}, [imgList]);
	//PART>
	// 未於 props 提供 imgList 時，回傳用於作為輪播圖片底圖的白色圖形
	// 並可進一步設定其樣式改變其位置及透明度作為陪襯（添加自訂樣式則會有飄移動畫）
	if (!imgList)
		return (
			<Container className={rwdOption}>
				<Box
					style={
						position
							? {
									top: position.top || null,
									right: position.right || null,
									left: position.left || null,
									bottom: position.bottom || null,
									width: position.width || '100vw',
									height: position.height || '100vh',
									zIndex: 4,
							  }
							: null
					}
					className={
						filterClass +
						' ' +
						// except scale, rotate, opacity
						(backgroundStyle ? backgroundClass : '')
					}
				>
					<ImgBackground style={{ background: color }} />
				</Box>
			</Container>
		);
	// 單張的無動畫靜態圖片
	if (imgCount === 1)
		return (
			<Container className={rwdOption}>
				<Box
					className={
						filterClass +
						' ' +
						(position
							? css({
									top: position.top || null,
									right: position.right || null,
									left: position.left || null,
									bottom: position.bottom || null,
									width: position.width || '100vw',
									height: position.height || '100vh',
									zIndex: 5,
							  })
							: '')
					}
				>
					<Img src={imgList[0]} />
				</Box>
			</Container>
		);
	// 圖片輪播模組
	return (
		/* 結構：
		<Container>
			loop => <Box>
				<img/>
			</Box>
		</Container>
		*/
		<Container className={rwdOption}>
			{imgList.map((item, index) => (
				<Box
					key={index}
					className={
						filterClass +
						' ' +
						(position
							? css({
									top: position.top || null,
									right: position.right || null,
									left: position.left || null,
									bottom: position.bottom || null,
									width: position.width || '100vw',
									height: position.height || '100vh',
							  })
							: '')
					}
					style={
						carouselState === index
							? {
									zIndex: 10,
							  }
							: carouselState ===
							  (index + 1 === imgCount ? 0 : index + 1) //用於判斷是否為當前輪播圖片的上一張照片
							? { zIndex: 5 }
							: null
					}
				>
					{carouselState === index ? (
						<Img // 當前正顯示的輪播圖片
							src={item}
							ref={el => (imgNodeList.current[index] = el)}
							className={fadeIn}
							style={
								// 離開當前頁面時暫停動畫
								pagePosition === pageState
									? null
									: pauseAnimationStyle
							}
						/>
					) : (
						<Img // 隱藏的圖片
							src={item}
							ref={el => (imgNodeList.current[index] = el)}
							style={
								pagePosition === pageState
									? null
									: pauseAnimationStyle
							}
						/>
					)}
				</Box>
			))}
		</Container>
	);
};

export default ImgCarousel;
