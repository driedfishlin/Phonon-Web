import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
// component
import NavigationTextButton from './NavigationTextButton';
// import NavMenuButton from './NavMenuButton';
// SVG
import { ReactComponent as phononLogo } from './../../../image/logo/phonon_art_logo_text_white.svg';

// Data Template
import { navListItem } from '../../../dataTemplate';

//SECTION> CSS Component
const Container = styled.div`
	width: 100%;
	position: fixed;
	padding-bottom: 20px;
	background: transparent;
	z-index: 50;
	transition: background 1s 0.5s;

	& > ul {
		float: right;
		margin: 0 30px;
	}
	& > ul > li > a {
		opacity: 0.3;
		transition: opacity 1s 0.5s;
	}
	&:hover {
		background: rgba(4, 4, 4, 0.1);
		transition: background 0.4s;
	}
	&:hover > ul > li > a {
		opacity: 1;
		transition: opacity 0.3s;
	}
	@media (max-width: 1024px) {
		> ul {
			display: none;
		}
		&:hover {
			background: rgba(4, 4, 4, 0);
		}
	}
`;

const Logo = styled(phononLogo)`
	& path,
	& polygon {
		stroke: none;
		transition: fill 0.4s;
	}
	filter: none;
	transition: filter 0.2s;
	&:hover {
		filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.8));
	}
`;

const H1 = styled.h1`
	position: absolute;
	top: 10px;
	left: 50%;
	transform: translateX(-50%);
	width: 50px;
	cursor: pointer;
	padding: 10px 20px;
	fontsize: 0px;
	@media (max-width: 1024px) {
		left: 15px;
		top: 30px;
		transform: translateX(0);
	}
`;

//SECTION> React Component
const MinNavigationBar = ({ clickFn, page }) => {
	return (
		<Container>
			<H1>
				聲子藝棧
				<Logo
					className={css`
						@media (max-width: 1024px) {
							& path,
							& polygon {
								fill: ${page % 2 === 1 ? 'white' : 'black'};
							}
						}
					`}
					onClick={() => {
						window.location.reload();
					}}
				/>
			</H1>

			<ul style={{ marginRight: '90px' }}>
				{navListItem.map(item => (
					<NavigationTextButton key={item.name} clickFn={clickFn}>
						{item.name}
					</NavigationTextButton>
				))}
			</ul>
			{/* <NavMenuButton /> */}
		</Container>
	);
};

export default MinNavigationBar;
