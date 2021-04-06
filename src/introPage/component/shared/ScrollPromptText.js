import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/css';
import { ReactComponent as ArrowDown } from '../../../image/icon/chevron-down-solid.svg';

const animationDuration = 4;
const color = 'black';

//SECTION>
const Container = styled.div`
	width: 200px;
    position: absolute;
    left: 50%;
    bottom: 1%;
    transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content flex-end;
`;
const Text = styled.p`
	text-align: center;
	font-size: 13px;
	font-weight: bold;
	color: ${color};
	z-index: 50;
	font-family: -apple-system, '微軟正黑體', BlinkMacSystemFont, 'Segoe UI',
		'Roboto', 'Oxygen';
`;

const ArrowContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 20px;
	height: 50px;
`;

const Arrow = styled(ArrowDown)`
	position: absolute;
	top: 12px;
	z-index: 50;
	width: 20px;
	& > path {
		fill: ${color};
	}
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

const ScrollPromptText = () => {
	return (
		<Container>
			<Text>SCROLL</Text>
			<ArrowContainer>
				<Arrow
					comment="This icon comes from FONTAWESOME. https://fontawesome.com/"
					style={{
						animation: `${arrowKeyframes} ${animationDuration}s infinite`,
					}}
				/>
				<Arrow
					comment="This icon comes from FONTAWESOME. https://fontawesome.com/"
					style={{
						animation: `${arrowKeyframes} ${animationDuration}s ${
							-animationDuration / 2
						}s infinite`,
					}}
				/>
			</ArrowContainer>
		</Container>
	);
};

export default ScrollPromptText;
