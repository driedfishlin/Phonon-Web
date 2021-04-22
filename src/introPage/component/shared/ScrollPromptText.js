import React, { useEffect, useState, useRef } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { ReactComponent as ArrowDown } from '../../../image/icon/chevron-down-solid.svg';

// [Custom]
const animationDuration = 4;

//SECTION>
const Container = styled.div`
	cursor: pointer;
    position: absolute;
    left: 50%;
    bottom: 1%;
    transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content flex-end;
	z-index: 50;
`;

const Text = styled.p`
	text-align: center;
	font-size: 13px;
	font-weight: bold;
	font-family: -apple-system, '微軟正黑體', BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen';
`;

const ArrowContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 20px;
	height: 50px;
`;

//SECTION>

const arrowKeyframes = keyframes`
    from{
        transform: translateY(0px);
        opacity: 0;
    }
    40%{
        transform: translateY(15px);
        opacity: 1;
    }
    65%{
        transform: translateY(15px);
    }
    70%{
        transform: translateY(15px);
        opacity: 0;
    }
    to{
        transform: translateY(15px);
        opacity: 0;
    }
`;

//SECTION> Function

const scrollToNextPage = () => {
	window.scrollTo({
		top: window.pageYOffset + 10,
		behavior: 'smooth',
	});
};

//SECTION> React Component

const ScrollPromptText = ({ color, pageState }) => {
	const [arrowState, setArrowState] = useState(true);
	const arrowRef = useRef(null);

	useEffect(() => {
		const observe = new IntersectionObserver(entries => {
			setArrowState(entries[0].isIntersecting);
		});
		observe.observe(arrowRef.current);
	}, []);

	const Arrow = styled(ArrowDown)`
		position: absolute;
		top: 12px;
		z-index: 50;
		width: 20px;
		& > path {
			fill: ${color};
		}
	`;
	return (
		<Container onClick={scrollToNextPage} ref={arrowRef}>
			<Text style={{ color: color }}>SCROLL</Text>
			<ArrowContainer>
				<Arrow
					comment="This icon comes from FONTAWESOME. https://fontawesome.com/"
					style={
						// 這裡把動畫的暫停條件寫死了，限定於 IntroPage 才套用動畫
						arrowState
							? {
									animation: `${arrowKeyframes} ${animationDuration}s infinite`,
							  }
							: null
					}
				/>
				<Arrow
					comment="This icon comes from FONTAWESOME. https://fontawesome.com/"
					style={
						arrowState
							? {
									animation: `${arrowKeyframes} ${animationDuration}s ${
										-animationDuration / 2
									}s infinite`,
							  }
							: null
					}
				/>
			</ArrowContainer>
		</Container>
	);
};

export default ScrollPromptText;
