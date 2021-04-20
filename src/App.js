import React, { useState, Fragment, createContext, useEffect } from 'react';

//SECTION> React Component

import IntroPage from './introPage/IntroPage';
import BusinessPage from './businessPage/BusinessPage';
import MessageComponent from './component/MessageComponent';

// 掌管主、商品頁的切換狀態，以及商品頁面的商品種類顯示
export const pageStateContext = createContext(null);

function App() {
	//PART>
	// 用於切換主、次頁面
	const [pageState, setPageState] = useState('businessPage');
	// 用於存裝商品狀態
	const [commoditiesState, setCommoditiesState] = useState({
		type: 'room',
		filter: 'all',
	});
	// 用於控制訊息文字
	const [messageState, setMessageState] = useState({
		show: false,
		text: '',
	});
	const contextValue = {
		commoditiesState: commoditiesState,
		setCommoditiesState: setCommoditiesState,
		switchToIntroPage: () => setPageState('introPage'),
		switchToBusinessPage: () => setPageState('businessPage'),
		message: { state: messageState, setState: setMessageState },
	};
	//PART>

	useEffect(() => {
		setTimeout(() => {
			setMessageState({
				show: true,
				text: '本網站僅用於作品展示，並無提供實際線上服務',
			});
		}, 500);
	}, []);

	//PART>
	return (
		<Fragment>
			<pageStateContext.Provider value={contextValue}>
				<div
					style={{
						display: pageState === 'introPage' ? 'block' : 'none',
					}}
				>
					<IntroPage className={'aa123'} />
				</div>
				<div
					style={{
						display:
							pageState === 'businessPage' ? 'block' : 'none',
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
