/* 入口頁 Section 2 右下角的 Logo 卡片模組 */

import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';

//SECTION> DATA
import { phononTeams, phononTeamInfoCardColor } from '../../../dataTemplate.js';

//SECTION> CSS COMPONENT
const ImgContainer = styled.div`
	width: 180px;
	height: 380px;
	position: relative;
	right: 60px;
	top: -10px;
	margin-top: 50px;
`;

const ImgBlock = styled.div`
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
	width: 180px;
	height: 380px;
	background-color: rgba(255, 255, 255, 1);
	overflow: hidden;
	border-radius: 10px;
	overflow: hidden;
	padding: 15px;
	bottom: 0;
	position: absolute;
	bottom: -20px;
	transition: transform 0.3s, top 0.3s, left 0.3s;
	& > div {
		z-index: 5;
		width: 100%;
		height: 100%;
		// background-color: rgba(0, 0, 0, 1);
		border-radius: 10px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		& > svg {
			height: 80%;
		}
	}
`;

const ifCardActive = (teamState, name, index) =>
	teamState === name
		? {
				transform: `rotate(${0}deg)`,
				top: 0,
				left: 0,
				zIndex: 10,
		  }
		: {
				transform: `rotate(${(-index - 1) * 4 - 5}deg)`,
				top: `${-(index + 1) * 5}px`,
				left: `${-(index + 1) * 10}px`,
				zIndex: -index + 5,
		  };

const PhononTeamInfoCardColor = ({ teamState }) => {
	return (
		<ImgContainer>
			{phononTeams.map(({ name, img }, index) => (
				<ImgBlock
					key={name}
					teamState={teamState}
					className={css`
						transform: rotate(${-index * 5}deg);
						left: ${-index * 30}px;
						top: ${-index * 5}px;
						z-index: ${-index + 5};
					`}
					style={ifCardActive(teamState, name, index)}
				>
					<div
						style={{
							backgroundColor: phononTeamInfoCardColor[index],
						}}
					>
						{(() => {
							// img 為 SVG component
							// [Bug] 這邊 svg 套用 styled 會造成其他頁面的 svg 樣式變化
							const TeamLogo = styled(img)`
								& path,
								polygon,
								rect,
								line {
									fill: white;
									stroke: none;
								}
							`;
							return <TeamLogo />;
						})()}
					</div>
				</ImgBlock>
			))}
		</ImgContainer>
	);
};

export default PhononTeamInfoCardColor;
