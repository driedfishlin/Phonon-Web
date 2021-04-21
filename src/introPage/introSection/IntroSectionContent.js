import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/css';

// SVG
import { ReactComponent as PhononLogo } from './../../image/logo/phonon_art_logo.svg';

//SECTION> STATE & Custom data

// 自訂 Logo 自身飄移速度
const floatAnimationDuration = 3;

//SECTION> CSS ANIMATION KEYFRAMES
const floatKeyframesX = keyframes`
	from{
		transform: translateX(-5px);
	}
	to{
		transform: translateX(5px);
	}
	`;
const floatKeyframesY = keyframes`
	from{
		transform: translateY(-5px);
	}
	to{
		transform: translateY(5px);
	}
	`;
const textSlideKeyframes = keyframes`
	from{
		opacity: 0;
		left: -100px;
	}
	70%{
		left: 0px;
		opacity: 1;

	}
	to{
		left: 0px;
		opacity: 1;

	}
`;
//SECTION> CSS COMPONENT
const Container = styled.div`
	position: absolute;
	top: 20vh;
	left: 15vw;
	transition: transform 1.2s;
	z-index: 15;
`;
const AnimationWrapX = styled.div`
	position: relative;
	animation: ${floatKeyframesX} ${floatAnimationDuration}s
		${-floatAnimationDuration / 2}s infinite ease-in-out alternate;
`;
const AnimationWrapY = styled.div`
	position: relative;
	animation: ${floatKeyframesY} ${floatAnimationDuration * 2}s infinite
		ease-in-out alternate;
`;
const Logo = styled(PhononLogo)`
	& path {
		fill: black;
		stroke: none;
	}
	& polygon {
		fill: black;
		stroke: none;
	}
	width: 170px;
	padding-left: 20px;
	transform: skewX(-17deg) rotate(-17deg) scale(1, 1.3);
`;
const TextContent = styled.div`
	position: relative;
	top: 70px;
	transform: translate(-90px, 0px) skewX(-17deg) rotate(-17deg)
		scale(0.9, 1.1);
	padding-left: 40px;
	& > h2 {
		letter-spacing: 4px;
		line-height: 50px;
		font-size: 24px;
		font-weight: 600;
		& > span {
			position: relative;
			font-size: 50px;
			top: 5px;
		}
		& > p {
			position: relative;
			display: inline;
			font-size: 35px;
			top: 30px;
		}
	}
`;
const H2 = styled.h2(props => ({
	paddingLeft: props.paddingLeft,
	position: 'relative',
	left: '-100px',
	opacity: 0,
}));

//SECTION> ClassName & Style

const slideText = css`
	animation-name: ${textSlideKeyframes};
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
	animation-fill-mode: forwards;
`;

// 用於離開當前頁面時停止動畫以節省運算效能
const pauseAnimationStyle = { animationPlayState: 'paused' };

//SECTION> React Component
const IntroSectionContent = ({ pageState }) => {
	console.log(pageState);
	//PART>
	return (
		<Container>
			<AnimationWrapX
				className={floatKeyframesX}
				style={pageState !== 1 ? pauseAnimationStyle : null}
			>
				<AnimationWrapY
					className={floatKeyframesY}
					style={pageState !== 1 ? pauseAnimationStyle : null}
				>
					<Logo />
					<TextContent>
						<H2
							paddingLeft="20px"
							className={slideText}
							style={{
								animationDelay: '0.7s',
							}}
						>
							<span>“</span> 以愛為出發點
						</H2>
						<H2
							paddingLeft="80px"
							className={slideText}
							style={{
								animationDelay: '0.5s',
							}}
						>
							用音樂藝術關懷人 <p>”</p>
						</H2>
					</TextContent>
				</AnimationWrapY>
			</AnimationWrapX>
		</Container>
	);
};

export default IntroSectionContent;
