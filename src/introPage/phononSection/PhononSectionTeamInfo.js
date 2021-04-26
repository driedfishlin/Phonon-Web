/*
入口頁 Section 2 個別團隊簡介區塊模組
*/

import React from 'react';
import styled from '@emotion/styled';

//SECTION>

const Container = styled.div`
	margin-top: 50px;
	display: inline-block;
	& > p {
		font-size: 20px;
		text-align: justify;
	}
	@media (max-width: 768px) {
		> p {
			font-size: 17px;
		}
	}
	@media (max-width: 670px) {
		> p {
			font-size: 15px;
		}
	}
`;

const H3 = styled.h3`
	font-size: 24px;
	margin-bottom: 20px;
`;

//SECTION>

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
