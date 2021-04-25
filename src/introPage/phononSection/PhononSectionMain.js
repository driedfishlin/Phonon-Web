import React, { useState } from 'react';
import styled from '@emotion/styled';

import PhononSectionTeamInfo from './PhononSectionTeamInfo';
import PhononSectionTabs from './component/PhononSectionTabs';
import PhononSectionTeamCard from './component/PhononSectionTeamCard';
import ScrollPromptText from '../component/shared/ScrollPromptText';

import backgroundPNG from '../../image/background/ins.png';

//SECTION> DATA
import { phononDescription, phononTeams } from '../../dataTemplate';

//SECTION> CSS Component
const Container = styled.div`
	max-width: 1280px;
	margin: 0 auto;
	height: 100%;
	padding-bottom: 30px;
	letter-spacing: 1px;
	display: flex;
	align-items: center;
`;

const Background = styled.div`
	position: absolute;
	height: 100vh;
	weight: 100vw;
	top: 0;
	left: 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
	& > img {
		width: 80%;
		opacity: 0.8;
	}
`;

const BoardArea = styled.div`
	width: 90%;
	margin: 0 auto;
	border-radius: 30px;
	display: flex;
	justify-content: flex-end;
`;

const TabsContainer = styled.div`
	z-index: 5;
`;

const Board = styled.div`
	z-index: 10;
	width: 90%;
	height: 100%;
	background: #fff;
	border-radius: 0 30px 30px 30px;
	box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

const ContentArea = styled.div`
	margin: 50px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Description = styled.p`
	text-indent: 42px;
	text-align: justify;
	font-size: 20px;
	color: black;
	width: 100%;
	@media (max-width: 699px) {
		font-size: 17px;
	}
`;

const TextContainer = styled.div`
	max-width: 60%;
	@media (max-width: 699px) {
		max-width: 100%;
	}
`;

//SECTION> React Component
const PhononSectionMain = () => {
	const [teamState, setTeamState] = useState('聲子藝棧');
	return (
		<Container>
			<Background>
				<img src={backgroundPNG} alt="background" />
			</Background>
			<BoardArea>
				<TabsContainer>
					{phononTeams.map(({ name }, index) => (
						<PhononSectionTabs
							name={name}
							key={name}
							teamState={teamState}
							setFn={setTeamState}
							index={index}
						/>
					))}
				</TabsContainer>
				<Board>
					<ContentArea>
						<Description>{phononDescription}</Description>
						<TextContainer>
							{phononTeams.map(({ name, description }) => (
								<PhononSectionTeamInfo
									key={name}
									name={name}
									description={description}
									teamState={teamState}
								/>
							))}
						</TextContainer>
						<PhononSectionTeamCard teamState={teamState} />
					</ContentArea>
				</Board>
			</BoardArea>
			<ScrollPromptText color={'black'} />
		</Container>
	);
};

export default PhononSectionMain;
