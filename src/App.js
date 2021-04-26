import React, { useState, Fragment, createContext, useEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

//SECTION> React Component

import IntroPage from './introPage/IntroPage';
import BusinessPage from './businessPage/BusinessPage';
import MessageComponent from './component/MessageComponent';

smoothscroll.polyfill();

// 掌管主、商品頁的切換狀態，以及商品頁面的商品種類顯示
export const pageStateContext = createContext(null);

function App() {
	//PART>
	// 用於切換主、次頁面 (introPage, businessPage)
	const [appPageState, setAppPageState] = useState('businessPage');
	// 用於存裝商品狀態
	const [commoditiesState, setCommoditiesState] = useState({
		type: 'room',
		filter: 'all',
	});
	// 用於控制訊息元件 MessageComponent
	const [messageState, setMessageState] = useState({
		show: false,
		text: '',
		color: '',
	});
	const contextValue = {
		commoditiesState: commoditiesState,
		setCommoditiesState: setCommoditiesState,
		switchToIntroPage: () => setAppPageState('introPage'),
		switchToBusinessPage: () => setAppPageState('businessPage'),
		message: { state: messageState, setState: setMessageState },
	};
	//PART>

	useEffect(() => {
		setTimeout(() => {
			setMessageState({
				show: true,
				text: '本網站僅用於作品展示，並無提供實際線上服務',
				color: 'yellow',
			});
		}, 500);
	}, []);

	//PART>
	return (
		<Fragment>
			<pageStateContext.Provider value={contextValue}>
				<div
					style={{
						height: '100%',
						display:
							appPageState === 'introPage' ? 'block' : 'none',
					}}
				>
					<IntroPage
						appPageState={appPageState}
						className={'aa123'}
					/>
				</div>
				<div
					style={{
						height: '100%',
						display:
							appPageState === 'businessPage' ? 'block' : 'none',
					}}
				>
					<BusinessPage />
				</div>
				<MessageComponent />
			</pageStateContext.Provider>
		</Fragment>
	);
}

export default App;
