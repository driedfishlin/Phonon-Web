import React, { Fragment, useRef, useEffect } from 'react';
import styled from '@emotion/styled';

//PART>
// 用於判斷 footer 區塊是順向或反向滑進，避免 observer 因為兩個判斷點重複觸發
let footerIsIntersecting = 0;

//PART> CSS Component
const Section = styled.div(props => ({
	height: props.height,
	background: props.bgc,
}));

//PART> React Component

const IntroPage = props => {
	// Element Selector
	const phononIndexSection = useRef(null),
		phononIntro = useRef(null),
		phononArtSection = useRef(null),
		phononCoffeeSection = useRef(null),
		footerSection = useRef(null);
	const sectionNodeList = [
		phononIndexSection,
		phononIntro,
		phononArtSection,
		phononCoffeeSection,
	];

	// 建立 Intersection Observer API 監聽
	//FIXME> useEffect 可能重複執行監聽，需求：在重新渲染時取消原有的 observer
	useEffect(() => {
		// 各 Section 通用的監聽
		const sectionObserver = new IntersectionObserver(scrollPage, {
			rootMargin: '-5px',
		});
		sectionNodeList.map(section =>
			sectionObserver.observe(section.current)
		);
		// 針對 footer 的監聽處理（增加區塊底部的判斷點）
		const footerObserver = new IntersectionObserver(scrollPage, {
			rootMargin: '-5px',
			threshold: [0, 0.95],
		});
		footerObserver.observe(footerSection.current);
	});

	// CALLBACK FUNCTION
	const scrollPage = entries => {
		// 針對 footer 的判斷
		if (
			footerIsIntersecting &&
			entries[0].target === footerSection.current &&
			// 用於判斷是兩個斷點之一所觸發
			entries[0].boundingClientRect.y + 20 <
				document.documentElement.clientHeight
		) {
			window.scrollTo({
				top:
					entries[0].target.offsetTop -
					document.documentElement.clientHeight,
				behavior: 'smooth',
			});
			// 使瀏覽器捲軸滑動完畢再更改狀態
			setTimeout(() => (footerIsIntersecting = 0), 300);
			return;
		}
		// 各 Section 通用的滑動功能
		if (entries[0].isIntersecting === true) {
			window.scrollTo({
				top: window.pageYOffset + entries[0].boundingClientRect.y,
				behavior: 'smooth',
			});
			// 對 footer 的例外處理
			if (entries[0].target === footerSection.current)
				setTimeout(() => (footerIsIntersecting = 1), 300);
		}
	};

	return (
		<Fragment>
			<Section
				height={'100vh'}
				bgc={'#222288'}
				ref={phononIndexSection}
			/>
			<Section height={'100vh'} bgc={'#228822'} ref={phononIntro} />
			<Section height={'100vh'} bgc={'#882222'} ref={phononArtSection} />
			<Section
				height={'100vh'}
				bgc={'#555555'}
				ref={phononCoffeeSection}
			/>
			<Section height={'200px'} bgc={'#000'} ref={footerSection} />
		</Fragment>
	);
};

export default IntroPage;
