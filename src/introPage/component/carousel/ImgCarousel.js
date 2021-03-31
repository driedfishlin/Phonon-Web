import React from 'react';
import styled from '@emotion/styled';

import { introPageCarouselImg } from '../../../dataTemplate';
const svgFilter = introPageCarouselImg.svgFilterBase64;

const Container = styled.div`
	width: 100%;
	position: absolute;
	top: 0;
`;

const Box = styled.div`
	width: 63vw;
	height: 100vh;
	position: absolute;
	top: 0;
	right: 0;
	overflow: hidden;
	${'' /* 輪播遮罩 */}
	mask-repeat: no-repeat;
	mask-position: 0 0px;
	mask-size: 180%;
	mask-image: url(${svgFilter});
	-webkit-mask-repeat: no-repeat;
	-webkit-mask-position: 0 0px;
	-webkit-mask-size: 180%;
	-webkit-mask-image: url(${svgFilter});
`;

const Img = styled.img`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const ImgCarousel = ({ imgList }) => {
	return (
		<Container>
			{imgList.map((item, index) => (
				<Box key={index}>
					<Img src={item} />
				</Box>
			))}
		</Container>
	);
};

export default ImgCarousel;
