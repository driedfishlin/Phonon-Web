import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// Component
import MainNavigationBar from './component/navBar/MainNavigationBar';
import IntroSectionMain from './introSection/IntroSectionMain';
import PhononSectionMain from './phononSection/PhononSectionMain';
import RoomSectionMain from './roomSection/RoomSectionMain';
import CoffeeSectionMain from './coffeeSection/CoffeeSectionMain';
import CommoditiesGroup from './CommoditiesGroup';
import PageMenu from './component/shared/PageMenu';
import Footer from './footerSection/Footer';

//SECTION> EVENT LISTENER
window.addEventListener('unload', event => {
	event.preventDefault();
	window.scrollTo({ top: 0 });
});

//SECTION> CSS COMPONENT

const Container = styled.div`
	width: 100%;
	overflow: hidden;
	-moz-overflow: hidden;
`;

const Section = styled.div(props => ({
	position: 'relative',
	height: props.height,
	background: props.bgc,
	overflow: 'hidden',
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
const IntroPage = ({ appPageState }) => {
	//PART> React State
	const [sideNavBarState, setSideNavBarState] = useState({
		target: null,
		isOpen: false,
		arrowDelay: false,
		prevPage: null,
	});
	const [pageState, setPageState] = useState(1);
	//PART> Element Selector
	const phononIndexSection = useRef(null),
		phononIntro = useRef(null),
		phononArtSection = useRef(null),
		phononCoffeeSection = useRef(null),
		sideNavBar = useRef(null),
		backArrow = useRef(null);
	const sectionNodeList = [
		phononIndexSection,
		phononIntro,
		phononArtSection,
		phononCoffeeSection,
	];

	//PART> FUNCTION
	// 呼叫 setState 以更新左側 UI
	const UpdateCurrentPage = entries => {
		switch (entries[0].target) {
			// 設定計時器延遲左側導覽列更新
			// 1. 增進動畫配合度上的視覺銜接
			// 2. 將動畫與捲動分開執行減少 drop frame
			case phononIndexSection.current:
				return setTimeout(() => setPageState(1), 500);
			case phononIntro.current:
				return setTimeout(() => setPageState(2), 500);
			case phononArtSection.current:
				return setTimeout(() => setPageState(3), 500);
			case phononCoffeeSection.current:
				return setTimeout(() => setPageState(4), 500);
			default:
				return;
		}
	};

	// 畫面捲動自動定位功能（intersection observer's callback）
	const scrollPage = entries => {
		if (entries[0].isIntersecting === true) {
			window.scrollTo({
				top: window.pageYOffset + entries[0].boundingClientRect.y,
				behavior: 'smooth',
			});
			// 更新目前聚焦頁面頁碼
			UpdateCurrentPage(entries);
		}
	};

	//PART> Intersection Observer API
	useEffect(() => {
		const sectionObserver = new IntersectionObserver(scrollPage, {
			rootMargin: '-1px',
		});
		sectionNodeList.map(section =>
			sectionObserver.observe(section.current)
		);
	}, []); // 這裡不給 dependent

	// 側邊導覽列（產品項目）切換功能
	const sideNavBarToggle = event => {
		let target = null;
		if (!sideNavBarState.isOpen) {
			target = event.target.innerText;
			// 鎖定畫面滾動
			document.documentElement.style.overflowY = 'hidden';
			// 設定頁面延遲彈出
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
				prevPage: pageState,
			});
			setPageState('sideBar');
		}
		if (sideNavBarState.isOpen) {
			// 解除頁面滾動鎖定
			document.documentElement.style.overflowY = 'auto';
			sideNavBar.current.style.pointerEvents = 'none';
			setTimeout(() => (sideNavBar.current.style.left = '100%'), 200);
			setTimeout(() => (sideNavBar.current.style.opacity = '0'), 200);
			setTimeout(() => (sideNavBar.current.style.width = '0'), 200);
			setTimeout(
				() =>
					(sideNavBar.current.style.transition =
						'width 0.5s, opacity 0.3s 0.2s, left 0.5s'),
				200
			);
			setSideNavBarState(prev => {
				setPageState(prev.prevPage);
				// 選單展開時點擊關閉按鈕將不觸發 scroll
				if (event.target.tagName === 'IMG') window.scrollTo({ top: 0 });
				return {
					target: prev.target,
					isOpen: false,
					arrowDelay: true,
					prevPage: null,
				};
			});
		}
	};

	//PART>
	return (
		<Container>
			<PageMenu page={pageState} changPage={setPageState} />
			<MainNavigationBar clickFn={sideNavBarToggle} />
			<SideNavBarContainer ref={sideNavBar}>
				<CommoditiesGroup
					clickState={sideNavBarState}
					clickFn={sideNavBarToggle}
					arrowEl={backArrow}
				/>
			</SideNavBarContainer>
			<Section height={'100vh'} bgc={'#F47C4F'} ref={phononIndexSection}>
				<IntroSectionMain pageState={pageState} />
			</Section>
			<Section height={'100vh'} bgc={'#DED2C7'} ref={phononIntro}>
				<PhononSectionMain />
			</Section>
			<Section
				height={'100vh'}
				bgc={'#3C4566'}
				ref={phononArtSection}
				id={'phononArtSection'}
			>
				<RoomSectionMain clickFn={sideNavBarToggle} />
			</Section>
			<Section height={'80vh'} bgc={'#F8DC54'} ref={phononCoffeeSection}>
				<CoffeeSectionMain clickFn={sideNavBarToggle} />
			</Section>
			<Footer bgc={'#4C2556'} height={'20vh'} />
		</Container>
	);
};

export default IntroPage;
