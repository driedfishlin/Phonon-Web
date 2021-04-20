import React, { useState, Fragment, createContext } from 'react';

//SECTION> React Component

import IntroPage from './introPage/IntroPage';
import BusinessPage from './businessPage/BusinessPage';

// 掌管主、商品頁的切換狀態，以及商品頁面的商品種類顯示
export const pageStateContext = createContext(null);

function App() {
	const [pageState, setPageState] = useState('businessPage');
	const [commoditiesState, setCommoditiesState] = useState({
		type: 'room',
		filter: 'all',
	});
	// console.log(pageState, commoditiesState);
	const contextValue = {
		commoditiesState: commoditiesState,
		setCommoditiesState: setCommoditiesState,
		switchToIntroPage: () => setPageState('introPage'),
		switchToBusinessPage: () => setPageState('businessPage'),
	};

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
			</pageStateContext.Provider>
		</Fragment>
	);
}

export default App;
