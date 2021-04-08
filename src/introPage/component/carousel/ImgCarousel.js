/*

	作為圖片跑馬燈的可重用元件，可傳入 position 物件設定位置及尺寸、 filter 物件控制形狀。作為輪播使用，需傳入具圖片網址的陣列（imgList）使用。如果不傳入該陣列，預設將產出靜態的白色色塊。傳入 backgroundStyle 時該色塊將帶有動畫。

	1. imgList 存在 => 使用該資料建立輪播
	2. imgList 不存在，但存在 backgroundStyle => 建立陪襯用底圖動畫
	3. imgList 與 backgroundStyle 都不存在 => 建立空白底圖

	・ backgroundStyle 所接受的參數 { opacity, rotate, scale }
	・ position 所接受的參數 { width, height, top, left }
	・ filter 所接受的參數 { size, src, position }
	
*/

import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

import { introPageCarouselImg } from '../../../dataTemplate';
const svgFilter = introPageCarouselImg.svgFilterBase64;

//SECTION> CUSTOM DATA & STATE

// [自訂] 圖片完全顯示的時間
const durationOfAnimate = 4;
// [自訂] 圖片切換的過度時長
const intervalOfAnimation = 1;
const totalAnimationTime = durationOfAnimate + intervalOfAnimation * 2;
// 辨識是否首次渲染頁面
let initLoading = true;

//SECTION> CSS COMPONENT
const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
`;

const Box = styled.div`
	position: absolute;

	${'' /* 尺寸、位置樣式寫在 render 處 */}

	display: flex;
	justify-content: center;
	align-items: center;
`;

const Img = styled.img`
	min-width: 100%;
	min-height: 100%;
	opacity: 0;
`;

const ImgBackground = styled.div`
	background: white;
	width: 100%;
	height: 100%;
`;

//SECTION> CSS > Animation Keyframes

const carouselAnimation = keyframes`
    from{
		opacity: 0;
        transform:  scale(1.1);
    }
	15%{
		opacity: 1;
	}
	85%{
		opacity: 1;
	}
    to{
		opacity: 0;
		transform:  scale(1);
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

//SECTION> React Component
const ImgCarousel = ({ imgList, backgroundStyle, filter, position }) => {
	// 當前輪播中的圖片索引數字
	const [carouselState, setCarouselState] = useState(0);
	// 取得 <img> 元素的參考
	const imgNodeList = useRef([]);

	//PART> CSS animation keyframes

	const floatKeyframes = keyframes(
		backgroundStyle
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
	filter ? (() => {})() : (filter = {});

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
		initLoading = false;

		if (imgList) {
			// 監聽每張圖片，當動畫結束時設定計時器以延後移除 class 的時間點
			imgNodeList.current.forEach(item => {
				item.addEventListener(
					'animationend', // 每當動畫結束時觸發
					() => {
						item.classList.remove(fadeIn);
						item.style.display = 'none';
					}
				);
			});

			// 以設定的動畫週期呼叫 setState 更新元件
			setInterval(() => {
				setCarouselState(prev =>
					prev === imgList.length - 1 ? 0 : ++prev
				);
			}, durationOfAnimate * 1000);
		}
	}, [imgList]);
	//PART>
	// 未於 props 提供 imgList 時，回傳用於作為輪播圖片底圖的白色圖形
	// 並可進一步設定其樣式改變其位置及透明度作為陪襯（添加自訂樣式則會有飄移動畫）
	if (!imgList)
		return (
			<Container>
				<Box
					style={
						position
							? {
									top: position.top || 0,
									left: position.left || 0,
									width: position.width || '100vw',
									height: position.height || '100vh',
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
					<ImgBackground />
				</Box>
			</Container>
		);

	// 圖片輪播主體
	return (
		<Container>
			{imgList.map((item, index) => (
				<Box
					key={index}
					className={
						filterClass +
						' ' +
						(position
							? css({
									top: position.top || 0,
									left: position.left || 0,
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
							: null
					}
				>
					{carouselState === index ? (
						<Img // 當前正顯示的輪播圖片
							src={item}
							ref={el => (imgNodeList.current[index] = el)}
							className={fadeIn}
							style={{
								display: 'block',
							}}
						/>
					) : (
						<Img // 隱藏的圖片
							src={item}
							ref={el => (imgNodeList.current[index] = el)}
							className={
								// 除了第一次載入不要加 class
								initLoading
									? null
									: // 在切換當前輪播時繼續持有 fadeIn 的 class
									// 以免切換圖片時畫面出現斷層
									// 後續以計時器清掉
									carouselState ===
									  (index + 1 === 4 ? 0 : index + 1)
									? fadeIn
									: null
							}
						/>
					)}
				</Box>
			))}
		</Container>
	);
};

export default ImgCarousel;
