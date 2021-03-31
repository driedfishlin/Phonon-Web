import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// Component
import MainNavigationBar from './component/navBar/MainNavigationBar';
import IntroSectionMain from './introSection/IntroSectionMain';
import CommoditiesGroup from './CommoditiesGroup';

//SECTION> STATE

// 當前頁面
let currentPage = 1;

// 用於判斷 footer 區塊是順向或反向滑進，避免 observer 因為兩個判斷點重複觸發
let footerIsIntersecting = 0;

//SECTION> CSS COMPONENT

const Container = styled.div`
	width: 100%;
	overflow: hidden;
`;

const Section = styled.div(props => ({
	height: props.height,
	background: props.bgc,
}));

const SideNavBarContainer = styled.div`
	position: fixed;
	height: 100vh;
	width: 0;
	z-index: 100;
	top: 0;
	left: 100%;
	opacity: 0;
	transition: width 0.5s, opacity 0.5s, left 0.5s;
	pointer-events: none;
`;

//SECTION> REACT COMPONENT

const IntroPage = props => {
	//PART> Element Selector
	const phononIndexSection = useRef(null),
		phononIntro = useRef(null),
		phononArtSection = useRef(null),
		phononCoffeeSection = useRef(null),
		footerSection = useRef(null),
		sideNavBar = useRef(null),
		backArrow = useRef(null);
	const sectionNodeList = [
		phononIndexSection,
		phononIntro,
		phononArtSection,
		phononCoffeeSection,
	];

	//PART> Intersection Observer API
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

	//PART> React State
	const [sideNavBarState, setSideNavBarState] = useState({
		target: null,
		isOpen: false,
		arrowDelay: false,
	});

	//PART> FUNCTION
	const UpdateCurrentPage = entries => {
		switch (entries[0].target) {
			case phononIndexSection.current:
				currentPage = 1;
				break;
			case phononIntro.current:
				currentPage = 2;
				break;
			case phononArtSection.current:
				currentPage = 3;
				break;
			case phononCoffeeSection.current:
				currentPage = 4;
				break;
			case footerSection.current:
				currentPage = 5;
				break;
			default:
				return;
		}

		console.log('current page: ' + currentPage);
	};

	//PART> CALLBACK FUNCTION

	// 畫面捲動自動定位功能
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

			// 更新目前聚焦頁面頁碼
			UpdateCurrentPage(entries);

			// 對 footer 的例外處理
			if (entries[0].target === footerSection.current)
				setTimeout(() => (footerIsIntersecting = 1), 300);
		}
	};

	// 側邊導覽列切換功能
	const sideNavBarToggle = event => {
		let target = null;
		if (!sideNavBarState.isOpen) {
			target = event.target.innerText;
			// 鎖定畫面滾動
			document.documentElement.style.overflowY = 'hidden';
			setTimeout(() => (sideNavBar.current.style.left = 0), 200);
			setTimeout(() => (sideNavBar.current.style.opacity = 1), 200);
			setTimeout(() => (sideNavBar.current.style.width = '100%'), 200);
			setTimeout(
				() =>
					(sideNavBar.current.style.transition =
						'width 0.5s, opacity 0.4s, left 0.5s'),
				200
			);
			// 避免版面滑動時卡頓，就位時再允許互動
			setTimeout(
				() => (sideNavBar.current.style.pointerEvents = 'auto'),
				700
			);
			setSideNavBarState({
				target,
				isOpen: true,
				arrowDelay: false,
			});
		}
		if (sideNavBarState.isOpen) {
			console.log(backArrow);
			document.documentElement.style.overflowY = 'auto';
			sideNavBar.current.style.pointerEvents = 'none';
			// backArrow.current.style.color = 'black';
			// backArrow.current.style.transform = 'scale(1.1) rotate(20deg)';
			setTimeout(() => (sideNavBar.current.style.left = '100%'), 200);
			setTimeout(() => (sideNavBar.current.style.opacity = '0'), 200);
			setTimeout(() => (sideNavBar.current.style.width = '0'), 200);
			setTimeout(
				() =>
					(sideNavBar.current.style.transition =
						'width 0.5s, opacity 0.3s 0.2s, left 0.5s'),
				200
			);
			setSideNavBarState(prevState => ({
				target: prevState.target,
				isOpen: false,
				arrowDelay: true,
			}));
		}
	};

	//PART>
	return (
		<Container>
			<MainNavigationBar clickFn={sideNavBarToggle} />
			<SideNavBarContainer ref={sideNavBar}>
				<CommoditiesGroup
					clickState={sideNavBarState}
					clickFn={sideNavBarToggle}
					arrowEl={backArrow}
				/>
			</SideNavBarContainer>
			<Section height={'100vh'} bgc={'#F47C4F'} ref={phononIndexSection}>
				<IntroSectionMain />
			</Section>
			<Section height={'100vh'} bgc={'#DED2C7'} ref={phononIntro} />
			<Section
				height={'100vh'}
				bgc={'#6B7C7D'}
				ref={phononArtSection}
				id={'phononArtSection'}
			/>
			<Section
				height={'100vh'}
				bgc={'#F8DC54'}
				ref={phononCoffeeSection}
			/>
			<Section height={'200px'} bgc={'#3C4566'} ref={footerSection} />
		</Container>
	);
};

export default IntroPage;
