import React, { useState, Fragment } from 'react';

//SECTION> React Component

import IntroPage from './introPage/IntroPage';
import BusinessPage from './businessPage/BusinessPage';

function App() {
	const [pageState, setPageState] = useState('businessPage');
	return (
		<Fragment>
			{pageState === 'introPage' && (
				<IntroPage changePage={setPageState} />
			)}
			{pageState === 'businessPage' && (
				<BusinessPage changePage={setPageState} />
			)}
		</Fragment>
	);
}

export default App;
