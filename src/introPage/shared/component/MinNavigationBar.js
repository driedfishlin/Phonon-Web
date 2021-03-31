import React from 'react';
import styled from '@emotion/styled';
// component
import NavigationTextButton from './UIElement/NavigationTextButton';
// SVG
import { ReactComponent as phononLogo } from './../../../image/logo/phonon_art_logo_text_white.svg';

//SECTION> Data Template
const navListItem = [
	{ name: '關於聲子' },
	{ name: '琴房預約' },
	{ name: '餐點訂製' },
];

//SECTION> CSS Component
const Container = styled.div`
	width: 100%;
	position: fixed;
	padding-bottom: 20px;
	background: transparent;
	z-index: 50;
	& > ul {
		float: right;
		margin: 0 30px;
	}
	& > ul > li > a {
		opacity: 0.3;
		transition: opacity 1s 0.5s;
	}
	&:hover > ul > li > a {
		opacity: 1;
		transition: opacity 0.3s;
	}
`;

const Logo = styled(phononLogo)`
	& path {
		fill: white;
	}
	& g {
		stroke: white;
	}
	filter: none;
	transition: filter 0.2s;
	&:hover {
		filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
	}
`;

const h1Style = {
	position: 'absolute',
	top: '10px',
	left: '50%',
	transform: 'translateX(-50%)',
	width: '50px',
	cursor: 'pointer',
	padding: '10px 20px',
	fontSize: '0px',
};

//SECTION> React Component
const MinNavigationBar = ({ clickFn }) => {
	return (
		<Container>
			<h1 style={h1Style}>
				聲子藝棧
				<Logo />
			</h1>
			<ul>
				{navListItem.map((item, index) => (
					<NavigationTextButton
						text={item.name}
						key={item.name}
						// 給予後面兩顆按鈕 callback
						clickFn={index ? clickFn : null}
					/>
				))}
			</ul>
		</Container>
	);
};

export default MinNavigationBar;
