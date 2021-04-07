/* 入口頁 Section 2 個別團隊簡介區塊模組 */

import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
	// position: absolute;
	margin-top: 50px;
	display: inline-block;
	// max-width: 65%;
	& > p {
		font-size: 20px;
		text-align: justify;
	}
`;

const H3 = styled.h3`
	font-size: 24px;
	margin-bottom: 20px;
`;

const PhononSectionTeamInfo = ({ name, description, teamState }) => (
	<Container
		key={name}
		style={{ display: teamState === name ? 'block' : 'none' }}
	>
		<H3>{name}</H3>
		<p>{description}</p>
	</Container>
);

export default PhononSectionTeamInfo;
