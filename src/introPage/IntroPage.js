import React, { useRef, useEffect, useState } from 'react';
import styled from '@emotion/styled';
// Component
import MainNavigationBar from './component/navBar/MainNavigationBar';
import IntroSectionMain from './introSection/IntroSectionMain';
import CommoditiesGroup from './CommoditiesGroup';
import PageMenu from './component/shared/PageMenu';

//SECTION> STATE

// 當前頁面
let currentPage = 1;
// 用於判斷 footer 區塊是順向或反向滑進，避免 observer 因為兩個判斷點重複觸發
let footerIsIntersecting = 0;

//SECTION> EVENT LISTENER
window.addEventListener('beforeunload', event => {
	event.preventDefault();
	window.scrollTo({ top: 0 });
});

//SECTION> CSS COMPONENT

const Container = styled.div`
	width: 100%;
	overflow: hidden;
`;

const Section = styled.div(props => ({
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
//FIXME> 要檢查是否會有需要優化效能的部分
const IntroPage = () => {
	//PART> React State
	const [sideNavBarState, setSideNavBarState] = useState({
		target: null,
		isOpen: false,
		arrowDelay: false,
	});
	const [pageState, setPageState] = useState(currentPage);
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
	//FIXME> 第五頁沒辦法適用左側導覽
	useEffect(() => {
		// 各 Section 通用的監聽
		const sectionObserver = new IntersectionObserver(scrollPage, {
			rootMargin: '-5px',
		});
		sectionNodeList.map(section =>
			sectionObserver.observe(section.current)
		);
		// 針對 footer 的監聽處理（增加區塊底部的判斷點）
		const footerObserver = new IntersectionObserver(
			// (entries, ownObserver) => {
			// 	scrollPage(entries, ownObserver, sectionObserver);
			// 	// console.log(entries);
			// 	// if (entries[0].isIntersecting) sectionObserver.disconnect();
			// 	// if(!entries[0].isIntersecting)
			// },
			scrollPage,
			{
				rootMargin: '-5px',
				threshold: [0, 0.95],
			}
		);
		footerObserver.observe(footerSection.current);
		return () => {
			sectionObserver.disconnect();
			footerObserver.disconnect();
		};
	});

	//PART> FUNCTION
	const UpdateCurrentPage = entries => {
		switch (entries[0].target) {
			case phononIndexSection.current:
				currentPage = 1;
				// 設定計時器，以避免滾動期間因為元件重新渲染
				// 造成 intersectionObserver 被觸發阻斷滾動
				setTimeout(() => setPageState(1), 800);
				break;
			case phononIntro.current:
				currentPage = 2;
				setTimeout(() => setPageState(2), 800);
				break;
			case phononArtSection.current:
				currentPage = 3;
				setTimeout(() => setPageState(3), 800);
				break;
			case phononCoffeeSection.current:
				currentPage = 4;
				setTimeout(() => setPageState(4), 800);
				break;
			case footerSection.current:
				currentPage = 5;
				// 因為不是滿版，因此延遲仍會觸發上一頁滑動
				// setTimeout(() => setPageState(5), 800);
				break;
			default:
				return;
		}
		// 頁碼目前還未有用途
		console.log('current page: ' + currentPage);
	};

	// 畫面捲動自動定位功能（intersection observer's callback）
	const scrollPage = (entries, ownObserver, otherObserver) => {
		// console.log(entries[0]);
		// 針對 footer 的判斷（頁面往上滑出 footer）
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

			// sectionNodeList.map(section =>
			// 	otherObserver.observe(section.current)
			// );
			// 使瀏覽器捲軸滑動完畢再更改狀態
			setTimeout(() => (footerIsIntersecting = 0), 300);
			// currentPage = 4;
			// setTimeout(() => setPageState(4), 800);
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

			// 對 footer 的例外處理（頁面往下滑入 footer）
			if (
				!footerIsIntersecting &&
				entries[0].target === footerSection.current
			) {
				// if (entries[0].isIntersecting) {
				// 	otherObserver.disconnect();
				// 	ownObserver.disconnect();
				// }

				setTimeout(() => (footerIsIntersecting = 1), 300);
			}
		}
	};

	// 側邊導覽列（產品項目）切換功能
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
